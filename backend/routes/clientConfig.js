const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const User = require('../models/User');

// ✅ poprawny import nazwanych funkcji z middleware
const { protect, restrictTo } = require('../middlewares/authMiddleware');

// 🔒 Zapisz lub zaktualizuj konfigurację projektu klienta
router.post('/client-config', protect, async (req, res) => {
  const userId = req.user.id;
  const config = req.body;

  try {
    const existingProject = await Project.findOne({ userId });

    if (existingProject) {
      // 🔁 Aktualizacja istniejącego projektu
      existingProject.set(config);
      await existingProject.save();
      return res.status(200).json({ message: 'Konfiguracja zaktualizowana!' });
    }

    // 🆕 Tworzenie nowego projektu
    const newProject = new Project({
      userId,
      ...config,
    });

    await newProject.save();
    res.status(201).json({ message: 'Konfiguracja zapisana!' });
  } catch (error) {
    console.error('Błąd zapisu:', error);
    res.status(500).json({ error: 'Błąd zapisu konfiguracji' });
  }
});

// 🔐 Dla administratora – pobierz wszystkie projekty klientów
router.get('/client-projects', protect, restrictTo('admin'), async (req, res) => {
  try {
    const projects = await Project.find().populate('userId', 'email'); // pokaż email właściciela
    res.status(200).json(projects);
  } catch (err) {
    console.error('Błąd pobierania projektów:', err);
    res.status(500).json({ error: 'Wystąpił błąd przy pobieraniu projektów' });
  }
});

module.exports = router;
