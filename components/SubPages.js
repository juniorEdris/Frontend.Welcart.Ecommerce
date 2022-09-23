import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const SubPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="hidden md:block">
        <div className="w-full danger-bg flex items-center justify-evenly h-full rounded-t-lg">
          <div className="">
            <span className=" text-xl">
              <GiHamburgerMenu />
            </span>
          </div>
          <div className="text-lg">Top Categories</div>
          <div className="">
            <span className="text-xl">
              <FiChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className="md:col-start-2 col-span-2 flex items-center justify-center">
        <ul className="flex items-center justify-center sub_category text-sm">
          <li className="flex items-center justify-center">
            <Link href="/">Exclusive Deals</Link>
            <span className="ml-3">
              <FiChevronDown />
            </span>
          </li>
          <li className="flex items-center justify-center">
            <Link href="/">Smart Watches</Link>
            <span className="ml-3">
              <FiChevronDown />
            </span>
          </li>
          <li className="">
            <Link href="/">Cell Phone</Link>
          </li>
          <li className="">
            <Link href="/">Headphone</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block ">
        <div className="flex items-center justify-center cursor-pointer mb-2">
          <div className="mx-3">
            <Image
              src="/img/super_discount.png"
              alt=""
              height="25"
              width="25"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="">
              <div className="text-sm opacity-70 font-extralight">
                Only this weekend
              </div>
              <div className="text-xl font-semibold danger-font">
                Super Discount
              </div>
            </div>
            <span className="ml-3 text-xl">
              <FiChevronDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPage;
