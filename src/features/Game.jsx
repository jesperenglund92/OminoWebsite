import CarouselComponent from "./Carousel";
import Gameplay from "./Components/Gameplay";
import Progression from "./Components/Progression";
import CreativeMode from "./Components/CreativeMode";
import GameEconomy from "./Components/GameEconomy";
import DemoVideo from "./Components/DemoVideo";


const Game = () => {
    const carouselItems = [
        { name: 'trailer', caption: <DemoVideo /> },
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
