
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('./models/book')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`)

app.use(bodyParser.json())
require('./routes/bookRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})