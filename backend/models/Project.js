const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  siteName: String,
  accessEmail: String, // ← Nowe pole
  pages: [String],
  themeColors: [String],
  font: String,
  animations: String,
  type: String,
  translations: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
