import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

function CarouselComponent({carouselItems, variant, fade}) {

  return (
    <Carousel className={variant} interval={30000} fade={fade}>
      {carouselItems.map((item, i) => (
        <Carousel.Item key={item.name + i}>
        {item?.img ?
          <div
            style={{height: '74dvh', display:'flex', flexDirection: 'column', justifyContent:'center'}}
          >
            <Image src={item.img} alt={item?.imgAlt} className={item?.imgStyle && item.imgStyle}>
            </Image>
          </div>
        :
          <div
            className="w-100"
            style={{height: '73dvh'}}
          />
        }
        {item?.caption &&
          <Carousel.Caption>
            <div
              className="w-100"
              style={{height: '74dvh', display:'flex', flexDirection: 'column', justifyContent:'center'}}
            >
              {item.caption}
            </div>
          </Carousel.Caption>
        }
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;