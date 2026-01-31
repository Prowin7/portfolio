// Personal Data - Updated with actual resume information
export const personalInfo = {
    name: "Praveen Nukilla",
    email: "nukillapraveen@gmail.com",
    phone: "+91 7396335654",
    location: "Allahabad, India",
    tagline: "Building the future with code, one project at a time",
    roles: [
        "Full-Stack Developer",
        "AI/ML Enthusiast",
        "Problem Solver",
        "Tech Explorer"
    ],
    bio: `I'm a passionate Software Developer and final-year student at IIIT Allahabad, 
  specializing in full-stack development with React.js, Node.js, and modern web technologies. 
  With experience in AI/ML projects and 400+ DSA problems solved, I love building impactful 
  applications that solve real-world problems.`,
    resumeLink: "/Praveen_Nukilla.pdf"
};

export const socialLinks = {
    github: "https://github.com/Prowin7",
    linkedin: "https://www.linkedin.com/in/praveen-nukilla-753a2a334/",
    leetcode: "https://leetcode.com/u/Praveen763/",
    gfg: "https://www.geeksforgeeks.org/user/iec202ocxp/",
    email: "mailto:nukillapraveen@gmail.com"
};

export const education = [
    {
        id: 1,
        institution: "Indian Institute of Information Technology Allahabad",
        shortName: "IIIT Allahabad",
        degree: "Bachelor of Technology",
        field: "Electronics and Communication Engineering",
        duration: "Nov 2022 – Jun 2026",
        grade: "CGPA - 7.50"
    },
    {
        id: 2,
        institution: "Jawahar Navodaya Vidyalaya, Pedavegi",
        shortName: "JNV Pedavegi",
        degree: "Central Board of Secondary Education",
        field: "Science Stream",
        duration: "2019 – 2021",
        grade: "Percentage - 91.7%"
    }
];

export const experience = [
    {
        id: 1,
        company: "FeetS Infra Project",
        role: "Software Developer Intern",
        duration: "May 2024 – Jun 2024",
        description: [
            "Designed a full-stack web application using React.js for the frontend and Node.js with Express.js for the backend, integrated with a PostgreSQL database.",
            "Focused on backend development by implementing RESTful APIs."
        ],
        technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Doctor Appointment App",
        description: "A comprehensive healthcare appointment scheduling system with secure authentication and automated reminders.",
        longDescription: "Built Node.js/Express backend with MongoDB, secure patient authentication, and automated SMS/email reminders for upcoming appointments. Implemented JWT-based secure login with role-based access control.",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC Architecture"],
        features: [
            "JWT-based secure login",
            "Role-based access control",
            "Automated SMS/email reminders",
            "Modular MVC-style architecture"
        ],
        github: "https://github.com/Prowin7/DocApp",
        live: "https://doc-app-users.vercel.app/",
        date: "Feb 2025 – Mar 2025",
        color: "#4ECDC4"
    },
    {
        id: 2,
        title: "LLM-Powered RAG Chatbot",
        description: "An AI-powered chatbot using Retrieval-Augmented Generation to answer questions from custom documents.",
        longDescription: "Built an LLM-based chatbot using LangChain, FAISS, and Hugging Face Transformers. Implemented RAG pipeline integrating embedding generation, similarity search, and prompt engineering.",
        technologies: ["Python", "LangChain", "FAISS", "Hugging Face", "Streamlit", "NLP"],
        features: [
            "RAG pipeline implementation",
            "Embedding generation & similarity search",
            "Interactive Streamlit interface",
            "Custom document processing"
        ],
        github: "https://github.com/Prowin7/LLM-Powered-RAG-Chatbot",
        live: "https://llm-powered-rag-chatbot-75wktnktuj3elwhbtypwqz.streamlit.app/",
        date: "Dec 2024 – Jan 2025",
        color: "#FF6B6B"
    }
];

export const skills = {
    languages: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 80 }
    ],
    frontend: [
        { name: "React.js", level: 88 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
    ],
    backend: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "JWT Auth", level: 80 },
        { name: "WebSockets", level: 75 }
    ],
    databases: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 }
    ],
    tools: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Socket.IO", level: 75 }
    ]
};

export const achievements = [
    {
        id: 1,
        title: "400+ DSA Problems",
        description: "Solved across LeetCode and GeeksForGeeks",
        color: "#4ECDC4"
    },
    {
        id: 2,
        title: "Satellite Imagery Project",
        description: "Working on crop monitoring dashboard using harmonic time-series analysis and regression models",
        color: "#FFD93D"
    }
];

export const responsibilities = [
    {
        id: 1,
        role: "Head, Corporate Relations",
        organization: "Aparoksha Technical Fest, IIIT Allahabad",
        duration: "Oct 2024"
    },
    {
        id: 2,
        role: "Core Team Member",
        organization: "Effervescence, Cultural Fest (IIIT Allahabad)",
        duration: "Oct 2023"
    },
    {
        id: 3,
        role: "AI/ML Wing Member",
        organization: "GeekHaven Club (IIIT Allahabad)",
        duration: "Nov 2023 – July 2024"
    }
];

export const codingProfiles = [
    {
        name: "LeetCode",
        username: "Praveen763",
        url: "https://leetcode.com/u/Praveen763/",
        problems: 300,
        color: "#FFA116"
    },
    {
        name: "GeeksforGeeks",
        username: "iec202ocxp",
        url: "https://www.geeksforgeeks.org/user/iec202ocxp/",
        problems: 150,
        color: "#2F8D46"
    }
];

export const stats = [
    { label: "Problems Solved", value: 400, suffix: "+" },
    { label: "Projects Built", value: 5, suffix: "+" },
    { label: "CGPA", value: 7.5, suffix: "", decimals: 1 },
    { label: "Lines of Code", value: 50, suffix: "K+" }
];
