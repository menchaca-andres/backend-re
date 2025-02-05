const express = require('express');
require('dotenv').config();
const genderRoute = require('./routes/genderRoute');
const studentModel = require('./routes/studentRoute')

const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/genres', genderRoute);
app.use('/api/students', studentModel);

app.use((error, req, res, next) => {
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: error.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});