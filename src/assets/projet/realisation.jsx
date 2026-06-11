import { useState } from 'react'
import { IconBrandGithub, IconExternalLink, IconDeviceLaptop, IconDeviceMobile } from '@tabler/icons-react'
import './realisation.css'

function Projets() {
  const projets = [
    {
      type: "web",
      icon: <IconDeviceLaptop size={28} color="#2563EB"/>,
      titre: "CAEI — Refonte Site Officiel",
      description: "Refonte du site officiel de l'entreprise CAEI lors de mon stage. Modernisation du design et mise à jour du contenu à partir d'un template existant.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://anliyoudev.github.io/caei/",
      live: "https://anliyoudev.github.io/caei/",
      color: "#2563EB"
    },
    {
      type: "web",
      icon: <IconDeviceLaptop size={28} color="#7C3AED"/>,
      titre: "DSMetrics Boost — Site Vitrine",
      description: "Site vitrine réalisé pour un client souhaitant promouvoir son entreprise DSMetrics Boost, cabinet d'analyse de données et de conseil stratégique.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://anliyoudev.github.io/DSMetrics/",
      live: "https://anliyoudev.github.io/DSMetrics/",
      color: "#7C3AED"
    },
    {
      type: "web",
      icon: <IconDeviceLaptop size={28} color="#06b6d4"/>,
      titre: "Rex-Hom — Projet Formation React",
      description: "Projet réalisé dans le cadre d'une formation React pour perfectionner mes compétences en développement frontend moderne.",
      technologies: ["React", "CSS"],
      github: "https://anliyoudev.github.io/Rex-Hom/",
      live: "https://anliyoudev.github.io/Rex-Hom/",
      color: "#06b6d4"
    },
    {
      type: "web",
      icon: <IconDeviceLaptop size={28} color="#10b981"/>,
      titre: "Amonarc — Site Vitrine",
      description: "Site vitrine réalisé pour l'entreprise Amonarc afin de présenter l'entreprise et leur application mobile bientôt disponible sur toutes les plateformes.",
      technologies: ["React", "CSS"],
      github: null,
      live: "https://www.amonarc.com/",
      color: "#10b981"
    },
    {
      type: "mobile",
      icon: <IconDeviceMobile size={28} color="#F59E0B"/>,
      titre: "Amonarc — Application Mobile",
      description: "Contribution au développement de l'app Amonarc. Développement du formulaire devenir vendeur et de la fonctionnalité caméra avec traitement d'images et vidéos en temps réel.",
      technologies: ["Flutter"],
      github: null,
      live: null,
      color: "#F59E0B"
    },
    {
      type: "mobile",
      icon: <IconDeviceMobile size={28} color="#E34F26"/>,
      titre: "Essikia — App Finance",
      description: "Contribution au développement de l'application de finance Essikia. Développement du formulaire de réinitialisation de mot de passe.",
      technologies: ["Flutter"],
      github: null,
      live: null,
      color: "#E34F26"
    },
  ]

  return (
    <div className="projets" id="Projets">
      <div className="projets-header">
        <h2>Mes Réalisations <span className="projets-badge">Portfolio</span></h2>
        <div className="projets-divider"></div>
      </div>

      <div className="projets-grid">
        {projets.map((projet, i) => (
          <div className="projet-card" key={i}>
            <div className="projet-thumb" style={{ borderColor: projet.color }}>
              <div className="projet-icon-wrap" style={{ background: `${projet.color}18` }}>
                {projet.icon}
              </div>
              <span className="projet-type">
                {projet.type === "web" ? "Web" : "Mobile"}
              </span>
            </div>

            <div className="projet-body">
              <h3 className="projet-titre">{projet.titre}</h3>
              <p className="projet-desc">{projet.description}</p>

              <div className="projet-tags">
                {projet.technologies.map((tech, j) => (
                  <span className="projet-tag" key={j}>{tech}</span>
                ))}
              </div>

              <div className="projet-links">
                {projet.github && (
                  <a href={projet.github} target="_blank" rel="noopener noreferrer" className="projet-link">
                    <IconBrandGithub size={16}/> GitHub
                  </a>
                )}
                {projet.live && (
                  <a href={projet.live} target="_blank" rel="noopener noreferrer" className="projet-link live">
                    <IconExternalLink size={16}/> Voir le site
                  </a>
                )}
                {!projet.github && !projet.live && (
                  <span className="projet-soon">🔒 Projet privé</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets