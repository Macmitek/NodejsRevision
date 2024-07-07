const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();

dotenv.config();

// const DB_USER = 'mijacomdb';
// const DB_PASSWORD = 'New7even@#';
// const PORT = 3000;

const { PORT, DB_USER, DB_PASSWORD } = process.env;
if (!PORT || !DB_USER || !DB_PASSWORD) {
  console.error('Missing required environment variables');
  process.exit(1);
}
const port = PORT;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.roe5gio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURL)
  .then((connection) => {
    console.log('db is connected');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  });

app.use(express.json()); // to read data from request body

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use('/search', (req, res) => {
  console.log(req.query);
  res.status(200).json({
    message: 'Search has been done successfully!',
    data: req.query,
  });
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
