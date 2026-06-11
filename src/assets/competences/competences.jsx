import { 
  IconBrandHtml5, 
  IconBrandCss3, 
  IconBrandJavascript, 
  IconBrandReact, 
  IconBrandFlutter, 
  IconBrandPhp
} from '@tabler/icons-react'
import './competences.css'

function Competences() {
  const skills = [
    { icon: <IconBrandHtml5 size={36} color="#E34F26"/>, name: "HTML", level: 85, color: "#E34F26" },
    { icon: <IconBrandCss3 size={36} color="#1572B6"/>, name: "CSS", level: 75, color: "#1572B6" },
    { icon: <IconBrandJavascript size={36} color="#F7DF1E"/>, name: "JavaScript", level: 70, color: "#F7DF1E" },
    { icon: <IconBrandPhp size={36} color='#4F5B93'/>, name: 'PHP', level: 50, color: "#4F5B93" },
    { icon: <IconBrandReact size={36} color="#2563EB"/>, name: "React", level: 65, color: "#2563EB" },
    { icon: <IconBrandFlutter size={36} color="#06b6d4"/>, name: "Flutter", level: 60, color: "#06b6d4" },
  ]

  return (
    <div className="competence" id="Competences">
      <div className="competence-header">
        <h2>Mes Technologies <span className="skills-badge">Skills</span></h2>
        <div className="competence-divider"></div>
      </div>

      <div className="competence-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%`, background: skill.color }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competences