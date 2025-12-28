import '../styles/footer.css';
import siteIcon from '../../public/assets/avatar-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={siteIcon} alt="Site icon" className="footer-icon" />
      <p>Designed and Developed by Patrick Solis</p>
    </footer>
  );
}

export default Footer;
