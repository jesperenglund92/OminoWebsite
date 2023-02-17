import CarouselComponent from "./Carousel";
import Splash from "./Components/Splash";
import News from "./Components/News";

const Home = () => {
    const carouselItems = [
        { name: 'splash', img: 'images/OminoFullLogoOneColor.png', imgAlt: 'First image', imgStyle: 'opacity-25', caption: <Splash /> },
        { name: 'news', img: 'images/4fly.png', imgAlt: 'second image', caption: <News /> },
      ];
      
    return (
        <section id='homeSection'>
            <CarouselComponent carouselItems={carouselItems} variant={'light'} fade={true}/>                  
        </section>
    );
}

export default Home;  
