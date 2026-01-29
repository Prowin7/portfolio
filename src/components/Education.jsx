import { education } from '../data/resumeData';
import './Education.css';

const Education = () => {
    return (
        <section className="education-section section">
            <h2 className="section-title">Education</h2>

            <div className="education-list">
                {education.map((edu) => (
                    <div key={edu.id} className="education-item card">
                        <div className="edu-header">
                            <div className="edu-icon-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className="edu-info">
                                <span className="edu-duration">{edu.duration}</span>
                                <h3 className="edu-title">{edu.institution}</h3>
                                <p className="edu-degree">{edu.degree} - {edu.field}</p>
                                <span className="edu-grade">{edu.grade}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
