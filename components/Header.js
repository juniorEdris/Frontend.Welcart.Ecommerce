import Image from "next/image";
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import SubPage from "./SubPages";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 py-2 md:justify-between mb-4 content-center">
        <div className="flex items-center justify-center">
          <Image src="/img/logo.png" alt="logo" height="50" width="138" />
        </div>
        <div className="flex px-8 md:px-0 mb-3 md:mb-0">
          <div className={`${styles.search_bar} w-4/5 `}>
            <input
              className="form-control rounded-l-lg w-full h-full"
              type="text"
              placeholder="What are you looking for?"
            />
            <span className={`${styles.search_icon}`}>
              <FiSearch />
            </span>
          </div>
          <div className="w-1/5">
            <button
              type="button"
              className="danger-bg rounded-r-lg h-full w-full"
            >
              Search
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-evenly">
            <div className={`${styles.sign_in_section} flex items-center `}>
              <div className="text-3xl">
                <FiUser />
              </div>
              <div className="mx-3">
                <span className="text-sm cursor-pointer">Sign In</span>
                <br />
                <span className="cursor-pointer">Account</span>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <span className="cursor-pointer text-3xl">
                <AiOutlineHeart />
              </span>
              <span className="h-5 w-5 absolute danger-bg rounded-full -right-2 -top-1 text-sm">
                1
              </span>
            </div>
            <div className="relative flex justify-center items-center">
              <span className="cursor-pointer text-3xl">
                <BsCartCheck />
              </span>
              <span className="h-5 w-5 absolute danger-bg rounded-full -right-2 -top-1 text-sm">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Sub pages starts here */}
      <SubPage />
    </>
  );
};

export default Header;
