require( 'dotenv' ).config();
const express = require( 'express' );
const routes = require('./src/routes');
app = express();
app.use( express.json() );
app.use( routes );
const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log('ouvindo porta', port));
