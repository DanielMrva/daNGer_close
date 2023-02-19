const jwt = require('jsonwebtoken');

const secret = 'supersecret';

const expiration = '2h';

module.exports = {
    authMiddleware: async function ( { req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if ( req.headers.authorization ) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
            console.log(req.user);
        } catch {
        console.log('User has token');
        }

        return req;
    
    },

    signToken: async function({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload}, secret, { expiresIn: expiration } );
    },
};