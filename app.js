import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


//importing mongodb
import connectToMongo from './db.js';
const app = express();
app.use(cors())
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const urlencodedParser = bodyParser.urlencoded({ extended: false })


// parse application/json
app.use(bodyParser.json())
app.use(urlencodedParser);


import placeRouter from './Routes/place.js'
// Connecting to Database
connectToMongo();

/* Get port from environment and store in Express.*/

const port = process.env.PORT || 4000;
// app.set('port', port);


// Using Routes
app.use('/place', placeRouter);

//Test route
app.get('/', (req, res) => {
    res.send('Fit At Home')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

