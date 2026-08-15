require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

const app = express()
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5174', credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

const PORT = process.env.PORT || 4000
async function start() {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nexora'
    await mongoose.connect(uri, { autoIndex: true })
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()

