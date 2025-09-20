import CarouselComponent from "./Carousel";
import Splash from "./Components/Splash";
import Download from "./Components/DownloadPolipod";

const Home = () => {
    const carouselItems = [
        { name: 'download', img: 'images/OminoGamesLogo.png', imgAlt: 'second image', imgStyle: 'opacity-25', caption: <Download /> },
        { name: 'splash', img: 'images/OminoGamesLogo.png', imgAlt: 'First image', imgStyle: 'opacity-25', caption: <Splash /> },
      ];

    return (
        <section id='homeSection'>
            <CarouselComponent carouselItems={carouselItems} variant={'light'} fade={true}/>
        </section>
    );
}

export default Home;
