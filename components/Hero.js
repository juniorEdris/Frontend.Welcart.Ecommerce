import Image from "next/image";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-8">
      <div className="">01</div>
      <div className="">
        <Slider />
      </div>
      <div className="flex flex-col">
        <div>
          <Image
            src="/img/add_image01.png"
            alt="slider_image"
            height="250"
            width="500"
          />
        </div>
        <div>
          <Image
            src="/img/add_image02.png"
            alt="slider_image"
            height="250"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
