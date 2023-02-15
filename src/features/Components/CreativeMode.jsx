import Image from 'react-bootstrap/Image'


const CreativeMode = () => {

    return (
        <>
            <div className="my-grid-header"><h3>creative mode</h3></div>
            <div className="my-container">
                <div className="new-grid">
                    <div className="new-grid-item long-pic">
                        <img src="public/images/levelEditor.png" alt="Omino" />
                    </div>
                    <div className="multi-paragraph-item">
                        <p>One of the many things that makes Omino special is the player's ability to create custom worlds and levels in an easy-to-use level editor. 
                            This unlocks the potential of having a sea of great and unique player created content to dive into. 
                        </p>
                        <p>
                            This feature also entails a form of asynchronous multiplayer.
                            One player might create a world and set its highscore on it, a highscore that can be set as a minimum requirement for clearing the world, 
                            effectively challenging any other player to beat them at their own world.
                        </p>
                        <p>
                            Apart from having complete freedom in building the actual playable area, the player can pick between different environments/surroundings/skyboxes. Future additions for customizability can be music and background 'homebase' for example.
                        </p>
                    </div>
                    <div className="new-grid-item long-pic">
                        <Image src="public/images/skyboxesSideBySide.png" alt="Omino" />
                    </div>
                </div>
            </div>
        </> 
    );
}

export default CreativeMode;  
