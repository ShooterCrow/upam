import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Curved3DCarousel = () => {
    const containerRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef(null);

    // Initialize GSAP context
    useGSAP(() => {
        if (!ringRef.current) return;

        // Set initial rotation and image properties
        gsap.set(ringRef.current, { rotationY: 180 });

        // Set up each image in the ring
        // First, define your image array
        const myImages = [
            'https://api.builder.io/api/v1/image/assets/TEMP/65edfbd6618650ee6c39d6d3e581e169f2567595?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/0939de8e4e557c4e75f688148d4757b3f0e275bb?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/7fe6a4a6f31d3a5de91463aff776e511431d8ec3?width=700',
            '/constructionworker.png',
            'https://api.builder.io/api/v1/image/assets/TEMP/65edfbd6618650ee6c39d6d3e581e169f2567595?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/0939de8e4e557c4e75f688148d4757b3f0e275bb?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=700',
            'https://api.builder.io/api/v1/image/assets/TEMP/7fe6a4a6f31d3a5de91463aff776e511431d8ec3?width=700',
            '/constructionworker.png',
            // ... add more images as needed
        ];

        const images = gsap.utils.toArray('.ring-img');
        console.log(images);

        images.forEach((img, i) => {
            // Use your custom image if available, otherwise fall back to placeholder
            const imageUrl = myImages[i] || `https://picsum.photos/id/${i + 32}/700/300/`;

            gsap.set(img, {
                rotateY: i * -36,
                transformOrigin: '50% 50% 500px',
                z: -500,
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: getBgPosition(i),
                backfaceVisibility: 'hidden'
            });
        });

        // Animate images in
        gsap.from('.ring-img', {
            duration: 1.5,
            y: 200,
            opacity: 0,
            stagger: 0.1,
            ease: 'expo'
        });

        // Start auto-rotation
        startAutoRotation();

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    // Handle hover state changes
    useEffect(() => {
        if (isHovered) {
            pauseRotation();
        } else {
            resumeRotation();
        }
    }, [isHovered]);

    const getBgPosition = (index) => {
        if (!ringRef.current) return '0px 0px';
        const rotationY = gsap.getProperty(ringRef.current, 'rotationY');
        const wrappedRotation = gsap.utils.wrap(0, 360, rotationY - 180 - index * 36);
        return `${-wrappedRotation / 360 * 400}px 0px`;
    };

    const updateBackgroundPositions = () => {
        const images = gsap.utils.toArray('.ring-img');
        images.forEach((img, i) => {
            gsap.set(img, {
                backgroundPosition: getBgPosition(i)
            });
        });
    };

    const startAutoRotation = () => {
        if (animationRef.current) {
            animationRef.current.kill();
        }

        animationRef.current = gsap.to(ringRef.current, {
            rotationY: '+=360',
            duration: 50,
            ease: 'none',
            repeat: -1,
            onUpdate: updateBackgroundPositions
        });
    };

    const pauseRotation = () => {
        if (animationRef.current) {
            animationRef.current.pause();
        }
    };

    const resumeRotation = () => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    };

    return (
        <div className="relative w-full h-[50vh] bg-transparent overflow-hidden">
            {/* Main container with perspective */}
            <div
                ref={containerRef}
                className="absolute perspective-[700px] xl:perspective-[500px] w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Ring of images */}
                <div
                    ref={ringRef}
                    id="ring"
                    className="absolute w-full h-full transform-style-3d"
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className={`ring-img absolute w-full h-full bg-cover bg-center transform-style-3d ${isHovered ? 'cursor-pointer' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* Vignette overlay */}
            <div style={{ background: "linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)" }} className="absolute w-[20%] h-full left-0"></div>

            <div style={{ background: "linear-gradient(to left, rgba(255,255,255,1) 10%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)" }} className="absolute w-[20%] h-full right-0"></div>

            {/* Hover indicator */}
            {/* {isHovered && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-lg">
                    Paused - Move mouse away to resume
                </div>
            )} */}
        </div>
    );
};

export default Curved3DCarousel;