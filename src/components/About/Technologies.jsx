const Technologies = ({ technologies }) => {
    return (
        <div className="technologies">
            <p className="text">Technologies I work with:</p>
            <ul className="tech-list">
                {technologies.map((techItem, index) => (
                    <li key={index}>{techItem}</li>
                ))}
            </ul>
        </div>
    );
};

export default Technologies;
