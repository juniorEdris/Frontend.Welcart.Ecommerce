import Image from "next/image";
import Slider from "react-slick";

const SliderBody = () => {
  const sliderImage = [
    { id: 1, img: "/img/slider_image.png" },
    { id: 2, img: "/img/slider_image.png" },
    { id: 3, img: "/img/slider_image.png" },
    { id: 4, img: "/img/slider_image.png" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderImage?.map((image) => (
          <div key={image?.id}>
            <Image
              src={image?.img}
              alt="slider_image"
              height="500"
              width="500"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBody;
