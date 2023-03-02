import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ICONS } from "../../utils/utils";


const Splash = () => {
    const icons = [{ name: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100090126797341' }, { name: 'fa-instagram', link: 'https://www.instagram.com/ominostudios/' }, { name: 'fa-twitter', link: 'https://twitter.com/OminoStudios' }, { name: 'fa-youtube', link: 'https://www.youtube.com/@ominostudios' }, { name: 'fa-kickstarter-k disabled', link: '#' }, { name: 'fa-discord', link: 'https://discord.com/channels/1074707561833562145/1074707563301572619' }];

    return (
        <div className="splash">
            <div className='download-btn-container'>
                <button className="lg">download</button>
            </div>
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
