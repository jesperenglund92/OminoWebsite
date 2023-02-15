import CarouselComponent from "./Carousel";
import Splash from "./Components/Splash";
import News from "./Components/News";

const Home = () => {
    const icons = [{ name: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100090126797341' }, { name: 'fa-instagram', link: 'https://www.instagram.com/ominostudios/' }, { name: 'fa-twitter', link: 'https://twitter.com/OminoStudios' }, { name: 'fa-youtube', link: 'https://www.youtube.com/@ominostudios' }, { name: 'fa-kickstarter-k', link: '#' }, { name: 'fa-discord', link: 'https://discord.com/channels/1074707561833562145/1074707563301572619' }];
    const news = ["2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  

    const carouselItems = [
        { name: 'first', img: 'public/images/OminoFullLogoOneColor.png', imgAlt: 'First image', imgStyle: 'opacity-25', caption: <Splash /> },
        { name: 'second', img: 'public/images/4fly.png', imgAlt: 'second image', caption: <News /> },
      ];
      
    return (
        <section id='homeSection'>
            <CarouselComponent carouselItems={carouselItems} variant={'light'} fade={true}/>                  
        </section>
    );
}

export default Home;  
