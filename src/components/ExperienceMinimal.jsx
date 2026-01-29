import { experience, responsibilities } from '../data/resumeData';
import './ExperienceMinimal.css';

const ExperienceMinimal = () => {
    return (
        <section className="experience-section section">
            <h2 className="section-title">Experience</h2>

            <div className="experience-list">
                {/* Work Experience */}
                {experience.map((exp) => (
                    <div key={exp.id} className="experience-item card">
                        <div className="exp-header">
                            <div className="exp-icon-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div className="exp-info">
                                <span className="exp-duration">{exp.duration}</span>
                                <h3 className="exp-title">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                            </div>
                        </div>
                        <ul className="exp-description">
                            {exp.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        <div className="exp-techs">
                            {exp.technologies.map((tech, index) => (
                                <span key={index} className="tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Responsibilities */}
                {responsibilities.map((resp) => (
                    <div key={resp.id} className="experience-item card">
                        <div className="exp-header">
                            <div className="exp-icon-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className="exp-info">
                                <span className="exp-duration">{resp.duration}</span>
                                <h3 className="exp-title">{resp.role}</h3>
                                <p className="exp-company">{resp.organization}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceMinimal;
