const currentTime = require("./currentTime");

module.exports = (req, res, next) => {
    console.log(`[${currentTime()}] ${req.method} ${req.url}`);
    next();
};
