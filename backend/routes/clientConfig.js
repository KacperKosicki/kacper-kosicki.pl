const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/client-config', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    const config = req.body;
  
    try {
      const existingProject = await Project.findOne({ userId });
  
      if (existingProject) {
        // Aktualizacja
        existingProject.set(config);
        await existingProject.save();
        return res.status(200).json({ message: 'Konfiguracja zaktualizowana!' });
      }
  
      // Nowy projekt
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

// 🔐 Endpoint dla ADMINA – pobierz wszystkie projekty klientów
router.get('/client-projects', authMiddleware, async (req, res) => {
    try {
      const admin = await User.findById(req.user.id);
  
      if (!admin || admin.role !== 'admin') {
        return res.status(403).json({ error: 'Brak dostępu – tylko dla administratora' });
      }
  
      const projects = await Project.find().populate('userId', 'email'); // pokaż email użytkownika
      res.status(200).json(projects);
    } catch (err) {
      console.error('Błąd pobierania projektów:', err);
      res.status(500).json({ error: 'Wystąpił błąd przy pobieraniu projektów' });
    }
  });
  
  module.exports = router;