const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const authRoutes = require('./routes/authRoutes');
const clientConfigRoutes = require('./routes/clientConfig'); // ✅ to jest twój router

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', clientConfigRoutes); // ✅ teraz działa wszystko

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Backend działa na porcie ' + process.env.PORT);
    });
  })
  .catch(err => console.log('Błąd połączenia z MongoDB:', err));
