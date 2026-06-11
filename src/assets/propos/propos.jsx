import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './propos.css';

function Propos() {
    const countA = useMotionValue(0)
    const countB = useMotionValue(0)
    const countC = useMotionValue(0)

    const roundedA = useTransform(countA, (val) => Math.round(val))
    const roundedB = useTransform(countB, (val) => Math.round(val))
    const roundedC = useTransform(countC, (val) => Math.round(val))

    useEffect(() => {
        const animationA = animate(countA, 6, { duration: 3 })
        const animationB = animate(countB, 2, { duration: 3 })
        const animationC = animate(countC, 6, { duration: 3 })

        return () => {
            animationA.stop()
            animationB.stop()
            animationC.stop()
        }
    }, [countA, countB, countC])

    return (
        <div className="hero-tout" id="propos">
            <div className="gauche">
                <h2>Qui suis-je ? <span className="badge">À propos</span></h2>
                <p>Développeur web & mobile passionné, je transforme vos idées en solutions numériques performantes. Spécialisé en React et Flutter, je conçois des applications modernes et intuitives.</p>
                <p>Concevoir. Développer. Propulser vos idées.</p>
            </div>

            <div className="droite">
                <div>
                    <div className="stat-num">
                        <motion.strong>{roundedA}</motion.strong>
                        <span className="plus">+</span>
                    </div>
                    <p>Projets réalisés</p>
                </div>
                <div>
                    <div className="stat-num">
                        <motion.strong>{roundedB}</motion.strong>
                        <span className="plus">+</span>
                    </div>
                    <p>Ans d'expérience</p>
                </div>
                <div>
                    <div className="stat-num">
                        <motion.strong>{roundedC}</motion.strong>
                        <span className="plus">+</span>
                    </div>
                    <p>Technologies</p>
                </div>
                <div>
                    <div className="stat-num">
                        <strong>100</strong>
                        <span className="plus">%</span>
                    </div>
                    <p>Satisfaction</p>
                </div>
            </div>
        </div>
    )
}

export default Propos