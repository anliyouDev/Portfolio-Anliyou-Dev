import { useState } from 'react'
import { IconMail, IconBrandWhatsapp, IconMapPin, IconSend } from '@tabler/icons-react'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setFormData({ nom: '', email: '', sujet: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Impossible de contacter le serveur.')
    }
  }

  return (
    <div className="contact" id="Contact">
      <div className="contact-header">
        <h2>Me Contacter <span className="contact-badge">Contact</span></h2>
        <div className="contact-divider"></div>
        <p className="contact-intro">
          Tu as un projet en tête ? Une question ? N'hésite pas à me contacter,
          je réponds dans les plus brefs délais.
        </p>
      </div>

      <div className="contact-grid">
        {/* GAUCHE — Infos */}
        <div className="contact-infos">
          <p className="contact-infos-title">Informations de contact</p>

          <div className="contact-item">
            <div className="contact-dot">
              <IconMail size={20} color="#2563EB"/>
            </div>
            <div>
              <p className="contact-label">Email</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=massomaanliyoufofana@gmail.com" className="contact-val" target="_blank" rel="noopener noreferrer">
                massomaanliyoufofana@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-dot">
              <IconBrandWhatsapp size={20} color="#25D366"/>
            </div>
            <div>
              <p className="contact-label">WhatsApp</p>
              <a href="https://wa.me/21656186345" target="_blank" rel="noopener noreferrer" className="contact-val">
                +216 56 186 345
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-dot">
              <IconMapPin size={20} color="#7C3AED"/>
            </div>
            <div>
              <p className="contact-label">Localisation</p>
              <span className="contact-val">Tunisie — Disponible à distance</span>
            </div>
          </div>

          <div className="contact-dispo">
            <span className="dispo-dot"></span>
            <span className="dispo-text">Disponible pour de nouveaux projets</span>
          </div>
        </div>

        {/* DROITE — Formulaire */}
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Votre nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Anliyou Dev"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Votre email</label>
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Sujet</label>
            <input
              type="text"
              name="sujet"
              placeholder="Votre sujet..."
              value={formData.sujet}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Décrivez votre projet ou votre demande..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Messages de retour */}
          {status === 'success' && (
            <p className="form-success">✅ Message envoyé avec succès !</p>
          )}
          {status === 'error' && (
            <p className="form-error">❌ {errorMsg}</p>
          )}

          <button
            className="contact-btn"
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            <IconSend size={16}/>
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
