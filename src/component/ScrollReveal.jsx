import { motion } from "framer-motion";

/**
 * A reusable scroll reveal component that adds entry/exit animations.
 * Supports directions: up, down, left, right, scale.
 * Works both ways (scrolling down and back up).
 */
export const ScrollReveal = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 40,
    className = ""
}) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        scale: { scale: 0.95, opacity: 0 },
    };

    const variants = {
        hidden: {
            opacity: 0,
            ...directions[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Sophisticated cubic-bezier
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
