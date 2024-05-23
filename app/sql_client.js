const pg = require('pg');
  const { Client } = pg
 
const client = new Client({
    connectionString : process.env.PG_CONNECTION_STRING
});
client.connect();
module.exports = client;