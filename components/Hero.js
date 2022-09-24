import Image from "next/image";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4 md:my-8">
      <div className="">01</div>
      <div className="">
        <Slider />
      </div>
      <div className="flex flex-col">
        <div className="mb-4">
          <Image
            src="/img/add_image01.png"
            alt="slider_image"
            height="238"
            width="500"
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/img/add_image02.png"
            alt="slider_image"
            height="238"
            width="500"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
