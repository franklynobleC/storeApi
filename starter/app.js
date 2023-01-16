// console.log('storeApi')

require('dotenv').config()   // get  env file
//async errors 
require('express-async-errors');

const  express = require('express');
const { fs } = require('fs');
const app = express();

//get db connection var
const connectDB = require('./db/connectdb');
//get routes from the routes package
const productsRouter = require('./routes/routesProducts');

const notFoundMiddleware = require('./middleware/error-handlers')
const errorMiddleware = require('./middleware/not-found')

//middleware 

app.use(express.json());

//routes 

app.get('/', (req, resp) => {
    resp.send('<h1>store API </h1> <a href="/api/v1/products">products<a/>')
})

//base routes for all the routes
app.use('/api/v1/products', productsRouter )


//if error, use  this route 

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT  || 3000  // if the  port is  undefined, use  port 3000

const start = async () => {
    try {
        //connectDB
       //this  returns a promise so we use await here
       await connectDB(process.env.MONGO_URI)
       .then(con => {
        console.log('DB  connected ......')
       }).catch(err => {
        console.log('can not connect' , err);
       })

        app.listen(port, console.log(`Server is  listening ${port}...`))

    }catch(err) {
        console.log(error, 'error Message')
    }
}
start()

