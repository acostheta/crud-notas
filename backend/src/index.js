// archivo que arranca el servidor
require('dotenv').config();

const app = require("./app");
require('./database');

async function main(){
    await app.listen(4000);
   console.log('Listen on port 4000');

}

main();