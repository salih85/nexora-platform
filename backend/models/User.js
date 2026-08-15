const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student','instructor','admin','moderator'], default: 'student' },
  isVerified: { type: Boolean, default: false },
  refreshTokens: { type: [String], default: [] },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
