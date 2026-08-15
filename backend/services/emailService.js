// Lightweight email sender stub — replace with real provider in production
const nodemailer = require('nodemailer')

async function sendVerificationEmail(to, token) {
  const verifyUrl = `${process.env.FRONTEND_URL || 'http://localhost:5174'}/verify-email?token=${token}`
  console.log(`(email stub) Send verification to ${to}: ${verifyUrl}`)

  // Example using nodemailer with ethereal or configured SMTP
  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@nexora.local',
      to,
      subject: 'Verify your Nexora account',
      text: `Click to verify: ${verifyUrl}`,
      html: `<p>Click to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
    })
  }
}

module.exports = { sendVerificationEmail }
