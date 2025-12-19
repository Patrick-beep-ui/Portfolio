import { useEffect, useRef } from 'react';
import hero from '../data/hero.json';
import TextType from './TextType.jsx';
import '../styles/hero.css';

const Hero = () => {
    const imageRefs = useRef([]);

    useEffect(() => {
        if (!imageRefs.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        imageRefs.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                {hero.hero_content.map((content, index) => (
                    <div key={index} className="hero-text">
                        <h1>{content.title}</h1>
                        <TextType 
                            text={content.roles}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />

                        <p className="hero-subtitle">
                            {content.subtitle}
                        </p>

                        <a href={content.cta_link} className="hero-button">
                            {content.cta_text}
                        </a>
                    </div>
                ))}
            </div>
            <div className="hero-image">
                <div className="image-container">
                    {hero.hero_image.map((img, index) => (
                        <img
                            key={index}
                            src={img.image_url}
                            alt={img.alt_text}
                            className="hero-img fade-in-down"
                            ref={(el) => (imageRefs.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
