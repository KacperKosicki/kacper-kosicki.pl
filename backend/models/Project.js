const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  siteName: String,
  accessEmail: String,
  pages: [String],
  themeColors: [String],
  font: String,
  fonts: [String], // ✅ dodane
  animations: String,
  type: String,
  translations: [String],
  purpose: String, // ✅ dodane
  hasOwnDomain: String, // ✅ dodane
  referenceSite: String, // ✅ dodane
  referenceDescription: String, // ✅ dodane
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
