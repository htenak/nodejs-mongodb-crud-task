const { connect } = require("mongoose");
const { MONGODB_URI } = require('./config.js');

(async() => {
    try{
        const db = await connect(MONGODB_URI);
        console.log('Conectado a Database: ', db.connection.name);
    }catch(err){
        console.log(err)
    }
})();
