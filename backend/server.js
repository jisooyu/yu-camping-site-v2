const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// connect DB
connectDB();

// parser 대신
app.use(express.json());

// x-www-form-urlencoded를 사용하면 다음이 필요
app.use(express.urlencoded({ extended: false }));

// define routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/camps', require('./routes/campRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
