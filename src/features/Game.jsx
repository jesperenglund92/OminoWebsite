import CarouselComponent from "./Carousel";
import Gameplay from "./Components/Gameplay";
import Progression from "./Components/Progression";
import CreativeMode from "./Components/CreativeMode";
import GameEconomy from "./Components/GameEconomy";


const Game = () => {
    const carouselItems = [
        { name: 'trailer', caption: 
        <>
            <div className="my-grid-header"><h3>demo video</h3></div>
        </> 
        },
        { name: 'gameplay', caption: <Gameplay /> },
        { name: 'progression', caption: <Progression /> },
        { name: 'creativeMode', caption: <CreativeMode />},
        { name: 'gameEconomy', caption: <GameEconomy /> },
      ];

    return (
        <section id='gameSection'>
            <CarouselComponent carouselItems={carouselItems} variant={'light'}/>
        </section>
    );
}

export default Game;  
