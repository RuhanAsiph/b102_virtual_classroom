const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
const PORT = 5000;

const userRouter = require('./routes/userRouter')

//local db connection
mongoose.connect('mongodb://0.0.0.0:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => console.log('connection created successful')) .catch((err) => console.error(err)); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//routes
app.use('/user', userRouter);


//listen 
app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
