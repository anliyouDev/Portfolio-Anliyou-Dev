import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons-react'
import './footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* GAUCHE */}
      <div className="footer-left">
        <span className="footer-logo">Anliyou <span>Dev</span></span>
        <p className="footer-slogan">Concevoir . Développer . Propulser vos idées</p>
      </div>

      {/* CENTRE */}
      <div className="footer-links">
        <a href="#propos">À propos</a>
        <a href="#Competences">Compétences</a>
        <a href="#Projets">Projets</a>
        <a href="#Contact">Contact</a>
      </div>

      {/* DROITE — Réseaux */}
      <div className="footer-socials">
        <a href="https://github.com/anliyouDev" target="_blank" rel="noopener noreferrer" className="social-btn github">
          <IconBrandGithub size={18}/>
        </a>
        <a href="https://www.linkedin.com/in/massoma-anliyou-fofana-a73871271/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
          <IconBrandLinkedin size={18}/>
        </a>
        <a href="https://www.facebook.com/anliyou.fofana.287438/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
          <IconBrandFacebook size={18}/>
        </a>
        <a href="https://wa.me/21656186345" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
          <IconBrandWhatsapp size={18}/>
        </a>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        © {currentYear} Anliyou Dev. Tous droits réservés.
      </div>

    </footer>
  )
}

export default Footer