const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
const PORT = 5000;

const userRouter = require('./routes/userRouter')
const staffRouter = require('./routes/staffRouter')
const studentRouter = require('./routes/studentRouter')

//local db connection
mongoose.connect('mongodb://0.0.0.0:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => console.log('connection created successful')) .catch((err) => console.error(err)); 
app.use(express.urlencoded({ extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}))


//routes
//user route
app.use('/user', userRouter);
//staff route
app.use('/staff', staffRouter);
//student route
app.use('/student', studentRouter);

//listen 
app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
