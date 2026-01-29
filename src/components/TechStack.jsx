import { skills } from '../data/resumeData';
import './TechStack.css';

const TechStack = () => {
    const allSkills = [
        ...skills.languages,
        ...skills.frontend,
        ...skills.backend,
        ...skills.databases,
        ...skills.tools
    ];

    return (
        <section className="tech-section section">
            <h2 className="section-title">Tech Stack</h2>

            <div className="tech-grid">
                {allSkills.map((skill, index) => (
                    <span key={index} className="tech-tag">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
