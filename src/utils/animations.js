// Framer Motion Animation Variants

// Fade animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Scale animations
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const scaleInBounce = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

// Stagger container
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

// Stagger items
export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

// Slide animations
export const slideInFromLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

export const slideInFromRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

// Progress bar animation
export const progressBar = (width) => ({
    hidden: { width: 0 },
    visible: {
        width: `${width}%`,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3
        }
    }
});

// Card hover animation
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// Button hover animation
export const buttonHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
};

// Nav link animation
export const navLinkHover = {
    rest: { color: "#a1a1aa" },
    hover: {
        color: "#ffffff",
        transition: { duration: 0.2 }
    }
};

// Floating animation (for decorative elements)
export const floatingAnimation = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Pulse animation
export const pulseAnimation = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Rotate animation
export const rotateAnimation = {
    animate: {
        rotate: [0, 360],
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

// Text reveal animation
export const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

// Counter animation hook helper
export const counterVariant = (target) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
});

// Section viewport settings
export const sectionViewport = {
    once: true,
    margin: "-100px",
    amount: 0.2
};

// Quick viewport for smaller elements
export const elementViewport = {
    once: true,
    margin: "-50px",
    amount: 0.5
};
