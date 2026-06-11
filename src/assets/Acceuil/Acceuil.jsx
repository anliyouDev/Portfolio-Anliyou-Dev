import './Acceuil.css'
import IA from "../img/code.png"

function Acceuil() {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <span className="hero-tag">Développeur Web & mobile</span>
                    <h1 className="hero-title">Bonjour, je suis</h1>
                    <h3 className="hero-name">Anliyou Dev</h3>
                    <p className="hero-sub">Concevoir, Développer. <br /> Propulser vos idées</p>
                    <div className="hero-btns">
                        <a href="#Projets" className="btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn-secondary">Me contacter</a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-img-box">
                        <img src={IA} alt="Anliyou Dev" className="hero-photo"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acceuil