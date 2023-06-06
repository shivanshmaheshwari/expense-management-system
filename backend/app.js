const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs') //read all the files which is given in the path

require('dotenv').config()

//for starting the app
const app = express()

//define port
const PORT = process.env.PORT 

//routes
//read all the files which is given in the path
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' +route)) )

//middlewares
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('<h1>Hello from server</h1>')
})

//initialize the server
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()