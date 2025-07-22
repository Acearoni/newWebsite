const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();


app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'));

//runs the config file that already connects to mongoDB
require('./config/mongoose.config')
require('./routes/post.routes')(app)
require('./routes/user.routes')(app);



app.listen(8000, () => console.log('The Server is running on port 8000'))
