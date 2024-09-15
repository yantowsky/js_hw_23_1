require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute');

const app = express();
const HOST = 'localhost';
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listens http://${HOST}:${PORT}`)
});