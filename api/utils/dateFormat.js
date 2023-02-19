const addDateSuffix = (date) => {
    let dateStr = date.toString();

    // get last char of date string
    const lastChar = dateStr.charAt( dateStr.length -1 );

    if ( lastChar === "1" && dateStr !== "11" ) {
        dateStr = `${dateStr}st`;

    } else if ( lastChar === "2" && dateStr !== "12" ) {
        dateStr = `${dateStr}nd`
    } else if ( lastChar === "3" && dateStr !== "13" ) {
        dateStr = `${dateStr}rd `;
    } else {
        dateStr = `${dateStr}th`;
    };

    return dateStr;
};

// function for format a timestamp, accepts the timestmp and an "options" object as paramaters

module.exports = (
    timestamp, { monthsLength = 'short', dateSuffix = true } = {} 
) => {
    // create month object
    const months = {
        0: monthsLength === "short" ? "Jan" : "January",
        1: monthsLength === 'short' ? 'Feb' : 'February',
        2: monthsLength === 'short' ? 'Mar' : 'March',
        3: monthsLength === 'short' ? 'Apr' : 'April',
        4: monthsLength === 'short' ? 'May' : 'May',
        5: monthsLength === 'short' ? 'Jun' : 'June',
        6: monthsLength === 'short' ? 'Jul' : 'July',
        7: monthsLength === 'short' ? 'Aug' : 'August',
        8: monthsLength === 'short' ? 'Sep' : 'September',
        9: monthsLength === 'short' ? 'Oct' : 'October',
        10: monthsLength === 'short' ? 'Nov' : 'November',
        11: monthsLength === 'short' ? 'Dec' : 'December',
    };

    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];

    const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();

    const year = dateObj.getFullYear();

    let hour = dateObj.getHours() > 12 ? Math.floor(dateObj.getHours() - 12) : dateObj.getHours();

    // if hour is 0 (12am), change it to 12
    if ( hour === 0 ) {
        hour = 12;
    };

    const minutes = ( dateObj.getMinutes() < 10 ? "0" : "" ) + dateObj.getMinutes();

    const periodOfDay = dateObj.getHours() >= 12 ? "pm" : "am";

    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year}`;

    return formattedTimeStamp;
};