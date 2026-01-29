import { useState } from 'react';
import { personalInfo, socialLinks, stats, codingProfiles } from '../data/resumeData';
import './ProfileCard.css';

const ProfileCard = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <section className="profile-section">
            {/* Status Badge */}
            <div className="status-badge">
                Available for work
            </div>

            {/* Profile Card */}
            <div className="profile-card">
                <div className="profile-avatar" onClick={() => setIsImageOpen(true)}>
                    <img
                        src="/profile.png"
                        alt={personalInfo.name}
                        className="avatar-image"
                    />
                </div>
                <div className="profile-info">
                    <h1 className="profile-name">{personalInfo.name}</h1>
                    <a
                        href={socialLinks.github}
                        className="profile-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @Prowin7
                    </a>
                </div>
            </div>

            {/* Bio */}
            <p className="profile-bio">
                I'm a full-stack developer and final-year student at IIIT Allahabad who loves building things that work fast and look good.
                I specialize in React, Node.js, Express.js, and MongoDB. With 400+ DSA problems solved and hands-on experience in AI/ML projects,
                I'm passionate about creating impactful applications.
            </p>

            {/* Stats */}
            <div className="profile-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <span className="stat-value">
                            {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}{stat.suffix}
                        </span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Coding Profiles */}
            <div className="coding-profiles">
                {codingProfiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        className="coding-profile-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="profile-name-small">{profile.name}</span>
                        <span className="profile-problems">{profile.problems}+ solved</span>
                    </a>
                ))}
            </div>

            {/* Image Lightbox */}
            {isImageOpen && (
                <div className="lightbox-overlay" onClick={() => setIsImageOpen(false)}>
                    <div className="lightbox-content">
                        <img
                            src="/profile.png"
                            alt={personalInfo.name}
                            className="lightbox-image"
                        />
                        <button className="lightbox-close" onClick={() => setIsImageOpen(false)}>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProfileCard;
