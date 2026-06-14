require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors())
app.use(express.json())

// Configuration du transporteur d'email (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'massomaanliyoufofana@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// Route POST /contact
app.post('/contact', async (req, res) => {
  const { nom, email, sujet, message } = req.body

  // Validation basique
  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email invalide.' })
  }

  const mailOptions = {
    from: `"Portfolio Contact" <massomaanliyoufofana@gmail.com>`,
    to: 'massomaanliyoufofana@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${sujet}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563EB;">Nouveau message depuis ton portfolio 🚀</h2>
        <hr style="border: 1px solid #e5e7eb;" />
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #374151;">Nom :</td>
            <td style="padding: 8px; color: #6b7280;">${nom}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; font-weight: bold; color: #374151;">Email :</td>
            <td style="padding: 8px; color: #6b7280;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #374151;">Sujet :</td>
            <td style="padding: 8px; color: #6b7280;">${sujet}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
          <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message :</p>
          <p style="color: #6b7280; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <hr style="border: 1px solid #e5e7eb; margin-top: 24px;" />
        <p style="color: #9ca3af; font-size: 12px;">
          Envoyé depuis le formulaire de contact de ton portfolio.
          Pour répondre, utilise directement cet email : <a href="mailto:${email}">${email}</a>
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true, message: 'Message envoyé avec succès !' })
  } catch (error) {
    console.error('Erreur envoi email :', error)
    return res.status(500).json({ error: "Erreur lors de l'envoi du message." })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`)
})