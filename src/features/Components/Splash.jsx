import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ICONS } from "../../utils/utils";


const Splash = () => {
    const icons = [{ name: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100090126797341' },
    { name: 'fa-instagram', link: 'https://www.instagram.com/ominogames/' },
    { name: 'fa-tiktok', link: 'https://www.tiktok.com/@ominogames' },
    { name: 'fa-youtube', link: 'https://www.youtube.com/@OminoGames' },
    { name: 'fa-twitter', link: 'https://x.com/OminoGames' },
    { name: 'fa-discord', link: 'https://discord.gg/saqjU9PWMt' }];

    return (
        <div className="splash">
            <div className="icons-container">
                <div className="autogrid">
                    {icons.map((icon, i) => (
                        <OverlayTrigger
                        key={icon?.name+i}
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-${icon.name}`}>
                                {ICONS[icon.name]}
                            </Tooltip>
                        }
                        >
                            <a href={icon.link} className={`fa-brands ${icon.name}`} target="_blank"></a>
                        </OverlayTrigger>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Splash;
