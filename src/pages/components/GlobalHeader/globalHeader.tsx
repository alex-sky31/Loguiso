import React from "react";
import classNames from "classnames";
import insta from "../../../asset/instagram.png";

import MenuHamburger from "../MenuHamburger/menuHamburger";

function globalHeader() {
  return (
    <div
      className={classNames(
        "flex w-full flex-row md:mt-[40px] md:mb-[56px] mb-3 md:h-[40px] items-center font-poppins md:px-[100px] justify-between px-2"
      )}
    >
      <div className="flex w-1/2 font-bold text-xl flex-row text-white items-center">
        <a href="src/pages/home/homePage">
          <img src={insta} width={22} color="white" />
        </a>
        <div className="ml-2 font-black text-4xl not-italic font-poppins">
          Loguiso
        </div>
      </div>
      <div className="md:flex hidden flex-row text-white w-1/2 font-medium text-xl gap-x-5 justify-end tracking-[0.01em] leading-8">
        <a href="#PROJECT">
          <div>PROJECT</div>
        </a>
        <div>BRAND</div>
        <div>ABOUT ME</div>
        <div>LIFESTYLE</div>
        <div>WORK</div>
      </div>
      <MenuHamburger />
    </div>
  );
}

export default globalHeader;
