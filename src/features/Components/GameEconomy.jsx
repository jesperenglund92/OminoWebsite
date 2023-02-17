import Image from 'react-bootstrap/Image'


const GameEconomy = () => {

    return (
        <>
            <div className="my-grid-header"><h3>game economy</h3></div>
            <div className="my-container">
                <div className="new-grid">
                    <div className="multi-paragraph-item">
                        <p>
                            Some worlds or levels might have time limits or a limited amount of allowed moves. 
                            These limits might cause the player to lose lives. Lives are recharged over time or can also be purchased with real money.
                        </p>
                        <p>
                            As the player completes worlds, a soft currency (stars) is earned, between 1-3, depending on the difficulty level of the world.
                            If it's a player created world, the amount of currency earned depends on the rating of the world. The same currency is also used to unlock new worlds.
                        </p>
                        <p>
                            There is also a hard currency, coins, which can be used to buy skins, for the Omino or for certain building blocks in the level editor, special environments in the level editor, and possibly special music for the worlds created. 
                            This currency is also used to publish more than 1 world. This will cost real world money because of the cost of storing world data as well as a way to encourage quality in player created worlds.
                        </p>
                        <p>
                            The exact economy balance will have to be player tested and calibrated but this is the outline.
                        </p>
                    </div>
                    <div className="new-grid-item long-pic">
                        <Image src="images/gameEconomy.png" alt="Game Economy" />
                    </div>
                </div>
            </div>
        </> 
    );
}

export default GameEconomy;  
