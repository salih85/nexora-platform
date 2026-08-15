const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../models/User')
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt')
const { sendVerificationEmail } = require('../services/emailService')

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, username, email, password } = req.body
    if (!name || !username || !email || !password) return res.status(400).json({ error: 'Missing fields' })

    const exists = await User.findOne({ $or: [{ email }, { username }] })
    if (exists) return res.status(409).json({ error: 'User already exists' })

    const passwordHash = await bcrypt.hash(password, 10)
    const user = new User({ name, username, email, passwordHash })
    await user.save()

    // create a verification token (simple refresh token used as verification for demo)
    const verifyToken = signRefreshToken({ id: user._id })
    await sendVerificationEmail(user.email, verifyToken)

    res.status(201).json({ message: 'Registered. Check email for verification (stub).' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Verify email
router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params
    const payload = verifyRefreshToken(token)
    const user = await User.findById(payload.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    user.isVerified = true
    await user.save()
    res.json({ message: 'Email verified' })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: 'Invalid or expired token' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

    const access = signAccessToken({ id: user._id })
    const refresh = signRefreshToken({ id: user._id })
    user.refreshTokens.push(refresh)
    await user.save()

    res.cookie('refreshToken', refresh, { httpOnly: true, sameSite: 'lax' })
    res.json({ access })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Refresh token
router.post('/refresh', async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.body.refreshToken
    if (!token) return res.status(401).json({ error: 'No token' })
    const payload = verifyRefreshToken(token)
    const user = await User.findById(payload.id)
    if (!user) return res.status(401).json({ error: 'Invalid token' })
    if (!user.refreshTokens.includes(token)) return res.status(401).json({ error: 'Token revoked' })

    const access = signAccessToken({ id: user._id })
    res.json({ access })
  } catch (err) {
    console.error(err)
    res.status(401).json({ error: 'Invalid token' })
  }
})

// Logout
router.post('/logout', async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.body.refreshToken
    if (token) {
      try {
        const payload = verifyRefreshToken(token)
        await User.findByIdAndUpdate(payload.id, { $pull: { refreshTokens: token } })
      } catch {}
    }
    res.clearCookie('refreshToken')
    res.json({ message: 'Logged out' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
