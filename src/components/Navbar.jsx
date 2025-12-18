import data from '../data/navbar.json';
import { ICONS } from '../assets/icons'
import '../styles/navbar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-links page-links'>
                {data.page_links.map((link, index) => (
                    <li key={index} className='nav-item'>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>

            <ul className='nav-links social-links'>
            {data.social_links.map((link, index) => {
                const Icon = ICONS[link.icon]

                return (
                <li key={index} className='nav-item'>
                    <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.name}
                    >
                    {Icon && <Icon className='social-icon' size={22} />}
                    </a>
                </li>
                )
            })}
            </ul>

        </nav>
    );
}

export default NavBar;