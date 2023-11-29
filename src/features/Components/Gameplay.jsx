import Image from 'react-bootstrap/Image'


const Gameplay = () => {

    return (
        <>
            <div className="my-grid-header"><h3>gameplay</h3></div>
            <div className="my-container">
                <div className="new-grid">
                    <div className="new-grid-item">
                        <p>
                            Polipod is an isometric puzzle game where the goal is to guide a cube-shaped character into a hole on a square grid. The game demands problem solving skills, knowledge of game mechanics, spatial reasoning, computational and algorithmic thinking. 
                            The player inhabits a cube, known as an Omino, which moves around by rolling.
                        </p>
                    </div>
                    <div className="new-grid-item">
                        <Image src="images/firstCropped.png" alt="Polipod" />
                    </div>
                    <div className="new-grid-item">
                    <p>
                        Along the way, the player Polipod encounters passive pods, called Dormipods. 
                        The player Polipod will attach itself to any Dormipods when one of its sides are directly adjacent to a side of a Dormipod, forming a composite Polipod. 
                        Eventually more than one Dormipod is introduced, sometimes requiring the formation of interesting Polipod shapes, which can dramatically change player movement.
                    </p>
                    </div>
                    <div className="new-grid-item">
                        <Image src="images/crazyShape.png" alt="Polipod" />
                    </div>
                    <div className="new-grid-item">
                        <p>
                            The movement pattern can also be influenced by the environment. Different properties of environment blocks can create some physical interactions with Polipod. 
                            A typical example can be the movement on the ice, this will lead to a sliding motion of the Polipod, instead of a roll, when there is a force applied.

                            On some levels, there can be switches in different colors. When an Polipod rolls onto a switch, it triggers the response from a certain environment setting such as a door or a bridge with the same color as the switch.
                            
                            If you roll onto a sucction cup, attached cubes can also be detached from the Polipod.
                        </p>
                    </div>
                    <div className="new-grid-item">
                        <Image src="images/onIce.png" alt="Polipod" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gameplay;  
