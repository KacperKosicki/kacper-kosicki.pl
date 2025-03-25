const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/authRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Backend działa na porcie ' + process.env.PORT);
    });
  })
  .catch(err => console.log('Błąd połączenia z MongoDB:', err));
