// console.log('storeApi')

require('dotenv').config()
//async errors 

const  express = require('express');
const { fs } = require('fs');
const app = express();

const notFoundMiddleware = require('./middleware/error-handlers')
const errorMiddleware = require('./middleware/not-found')

//middleware 

app.use(express.json());

//roots 

app.get('/', (req, resp) => {
    resp.send('<h1>store API </h1> <a href="/api/v1/products">products<a/>')
})



//products route 

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT  || 3000 

const start = async () => {
    try {
        //connectDB
        app.listen(port, console.log(`Server is  listening ${port}...`))

    }catch(err) {
        console.log(error, 'error Message')
    }
}
start()

