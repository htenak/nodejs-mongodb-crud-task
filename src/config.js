const { config } = require('dotenv')

config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/test";

module.exports = {
    MONGODB_URI,
    PORT
};

