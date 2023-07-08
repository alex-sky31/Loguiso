import React from "react";
import babeeLogo from "../../../asset/babee-logo.png";
import samsungLogo from "../../../asset/Samsung-Logo.png";
import speakeasyLogo from "../../../asset/speakeasy.png";
import messikaLogo from "../../../asset/messikaLogo2.png";
import alphaLogo from "../../../asset/alpha.png";
import volangeLogo from "../../../asset/volangeLogo.png";

function logoListBand() {
  return (
    <div className="my-[61px] w-full h-auto md:max-h-[135px] max-h-[100px] bg-white flex flex-row justify-between md:py-[40px] py-4">
      <img
        src={babeeLogo}
        color="black"
        height={70}
        className="w-1/6 object-contain"
      />
      <img
        src={samsungLogo}
        color="black"
        className="w-1/6 object-contain aspect-[3/2]"
      />
      <img
        src={speakeasyLogo}
        color="black"
        className="w-1/6 object-contain aspect-[3/2]"
      />
      <img
        src={messikaLogo}
        color="white"
        className="w-1/6 object-contain aspect-[3/2]‡"
      />
      <img
        src={alphaLogo}
        color="black"
        className="w-1/6 object-contain aspect-[3/2]"
      />
      <img
        src={volangeLogo}
        color="black"
        className="w-1/6 object-contain aspect-[3/2]"
      />
    </div>
  );
}

export default logoListBand;
