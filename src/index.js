const app = require('./app.js');
const { PORT } = require('./config.js');
require('./database.js');

app.listen(PORT);
console.log('Server en puerto ', PORT);
