const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Użytkownik już istnieje' });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, passwordHash, role });
    await newUser.save();

    res.status(201).json({ message: 'Użytkownik utworzony' });
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Nieprawidłowy email lub hasło' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Nieprawidłowy email lub hasło' });

    const token = generateToken(user);
    res.json({ token, user: { id: user._id, role: user.role, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Błąd logowania' });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    res.json(user);
  } catch {
    res.status(401).json({ error: 'Nieautoryzowany' });
  }
};
