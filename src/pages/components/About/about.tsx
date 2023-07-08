import React from "react";

function about() {
  return (
    <div
      className="w-full md:h-[70vh] h-auto flex md:flex-row flex-col-reverse md:px-[100px] "
      id="ABOUT"
    >
      <div className="w-full flex h-[70vh] ">
        <img
          className="w-full h-[90%] rounded-3xl object-contain"
          src={require("../../../asset/mg.jpg")}
          color="white"
          loading="lazy"
          alt={"Balmain"}
        />
      </div>
      <div className="w-full md:h-full h-auto flex md:justify-normal justify-center flex-col mt-6 gap-y-8">
        <div className="md:w-3/4 w-9/10 h-auto font-black text-white md:text-[111px] text-[90px] not-italic font-poppins text-center md:text-left leading-[137px] ">
          ABOUT
        </div>
        <div className="md:w-3/4 w-9/10 h-auto font-black text-white md:text-[111px] text-[90px] not-italic font-poppins text-center md:text-left leading-[137px] md:-mt-8 -mt-14">
          ME
        </div>
        <div className="md:w-3/4 w-9/10 font-medium font-poppins text-3xl text-white leading-[52px] text-[#D9D9D9] text-center md:text-left">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </div>
        <div className="font-medium md:w-3/4 w-9/10  font-poppins text-3xl text-white leading-[52px] text-[#D9D9D9] text-center md:text-left">
          1 June - 10 June 2021
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center bg-white py-4 rounded-full w-64 text-center">
            <span className="font-bold font-poppins text-2xl">
              &spades; Let's work &spades;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
