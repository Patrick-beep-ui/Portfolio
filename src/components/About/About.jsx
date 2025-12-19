import '../../styles/about.css';
import about from '../../data/about.json';
import Technologies from './Technologies';

const About = () => {
    return (
        <section className="about-container section" id='about'>
            {about.about_info.map((section, index) => (
                <div className='about-info'>
                    <h2>{section.title}</h2>
                    <p>{section.description_1}</p>
                    <Technologies technologies={section.technologies} />
                    <p>{section.description_2}</p>
                </div>
            ))}

            {about.about_img.map((img, index) => (
                <div
                    key={index}
                    className="about-image"
                    style={{
                        width: '40%',
                        backgroundImage: `url(${img.image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '20px',
                        marginLeft: '20px',
                        marginTop: '100px',
                    }}
                    aria-label={img.alt_text}
                />
            ))}
        </section>
    );
}

export default About;