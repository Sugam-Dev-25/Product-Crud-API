require('dotenv').config();
const express =require('express');
const path = require('path');
const cors = require('cors');

const connectDB = require('./app/config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
connectDB();

const productRoutes = require('./app/router/productRoutes');
app.use('/api', productRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

