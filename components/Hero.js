import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Slider from "./Slider";

const Hero = () => {
  const categories = [
    {
      id: 1,
      name: "Laptop and Desktop",
      img: "/img/dropdownImg/laptop.png",
      subCategory: [
        {
          id: 1,
          name: "01",
        },
        {
          id: 2,
          name: "02",
          childCategory: [],
        },
      ],
    },
    {
      id: 2,
      name: "Home Living",
      img: "/img/dropdownImg/home.png",
      subCategory: [],
    },
    {
      id: 3,
      name: "Laptop and Desktop",
      img: "/img/dropdownImg/home.png",
      subCategory: [],
    },
    {
      id: 4,
      name: "Book and Stationary",
      img: "/img/dropdownImg/stationary.png",
      subCategory: [
        {
          id: 1,
          name: "01",
        },
        {
          id: 2,
          name: "02",
          childCategory: [],
        },
      ],
    },
    {
      id: 5,
      name: "Home Appliances",
      img: "/img/dropdownImg/appliance.png",
      subCategory: [],
    },
    {
      id: 6,
      name: "Electronics",
      img: "/img/dropdownImg/electronic.png",
      subCategory: [
        {
          id: 1,
          name: "01",
        },
        {
          id: 2,
          name: "02",
          childCategory: [
            {
              id: 1,
              name: "01",
            },
            {
              id: 2,
              name: "02",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Fast Food",
      img: "/img/dropdownImg/fastfood.png",
      subCategory: [],
    },
    {
      id: 8,
      name: "More",
      img: "/img/dropdownImg/more.png",
      subCategory: [
        {
          id: 1,
          name: "01",
        },
        {
          id: 2,
          name: "02",
          childCategory: [],
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-4 md:my-8">
      <div className="hidden md:block">
        <div className="hero-dropdown">
          <ul>
            {categories?.map((cat) => (
              <li key={cat?.id} className="dropdown-link">
                <a href="#">
                  <div className="flex">
                    {" "}
                    <Image
                      src={cat?.img}
                      alt="cat_image"
                      height="17"
                      width="17"
                    />
                    <span className="mx-2">{cat?.name}</span>
                  </div>
                  {cat?.subCategory?.length > 0 && <FaAngleRight />}
                </a>
                {cat?.subCategory?.length > 0 && (
                  <div className="dropdown second">
                    <ul>
                      {cat?.subCategory?.map((subcategory) => (
                        <li key={subcategory?.id} className="dropdown-link">
                          <a href="#">
                            {subcategory?.name}{" "}
                            {subcategory?.childCategory?.length > 0 && (
                              <FaAngleRight />
                            )}
                          </a>
                          {subcategory?.childCategory?.length > 0 && (
                            <div className="dropdown second">
                              <ul>
                                {subcategory?.childCategory?.map(
                                  (childcategory) => (
                                    <li
                                      key={subcategory?.id}
                                      className="dropdown-link"
                                    >
                                      <a href="#">{childcategory?.name}</a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-start-2 col-span-2">
        <Slider />
      </div>
      <div className="flex flex-col">
        <div className="mb-4">
          <Image
            src="/img/add_image01.png"
            alt="slider_image"
            height="340"
            width="500"
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/img/add_image02.png"
            alt="slider_image"
            height="340"
            width="500"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
