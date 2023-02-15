import Image from 'react-bootstrap/Image'


const Progression = () => {

    return (
        <>
            <div className="my-grid-header"><h3>progression</h3></div>
            <div className="my-container">
                <div className="new-grid">
                    <div className="new-grid-item">
                        <p>The big picture objective of the game is to beat different worlds. Each world consists of up to 10 levels. 
                            Clearing a world grants the player the ability to unlock more worlds. The player can pick and choose which worlds to play and new worlds will be added on a regular basis.
                            The player can also choose to play player created worlds, rate other's worlds and compete for highscores.
                        </p>
                    </div>
                    <div className="new-grid-item long-pic">
                        <Image src="public/images/worldBrowser.png" alt="Omino" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progression;  
