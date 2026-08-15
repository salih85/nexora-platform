const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Public profile by username
router.get('/:username', async (req, res) => {
  try {
    const u = await User.findOne({ username: req.params.username }).select('-passwordHash -refreshTokens -__v')
    if (!u) return res.status(404).json({ error: 'Not found' })
    res.json(u)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
