const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const connect = () => {
    const url = 'mongodb://127.0.0.1:27017/daNGer_close_DB' || process.env.MONGO_CONNECTION_STRING;
    logger.info("process.env.MONGO_CONNECTION_STRING" + 'mongodb://127.0.0.1:27017/daNGer_close_DB' || process.env.MONGO_CONNECTION_STRING);

    mongoose.connect(url, {
        useNewUrlParser: true,
        // useFindAndMondify: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    });

    mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
    });

    mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to database", err);
    });
};

const disconnect = () => {
    if (!mongoose.connection) {
        return;
    };

    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Disconnected to database");
    });
};

module.exports = {
    connect,
    disconnect
};