import React from "react";
import {
  BELL,
  CIRCLE,
  CLOUD_UPLOAD,
  LIVE,
  PRETTIER,
  JS,
  REMOTE,
  SOURCE_CONTROL,
  TRIANGLE,
} from "../utils/constants";

const Footer = () => {
  return (
    <div className="footer flex justify-between items-center bottom-0 fixed z-[9999] w-full bg-[#2098e9] h-[1.45rem]">
      <div className="first-part flex justify-center items-center cursor-pointer">
        <div className="remote-window bg-green-700 hover:bg-green-600 px-3 py-[0.26rem]">
          <img src={REMOTE} alt="remote window" />
        </div>
        <div className="master flex px-2 gap-1 py-[0.2rem] justify-center items-center text-xs font-medium font-openSans text-white hover:bg-[#40adf6]">
          <img src={SOURCE_CONTROL} alt="source control" />
          <h2>
            master<sup>*</sup>
          </h2>
          <img src={CLOUD_UPLOAD} alt="cloud upload" />
        </div>
        <div className="no-problem sm:flex hidden px-2 gap-1 hover:bg-[#40adf6]">
          <img src={CIRCLE} alt="circle" />
          <h2 className="text-white text-xs font-openSans font-medium">0</h2>
          <img src={TRIANGLE} alt="triangle" />
          <h2 className="text-white text-xs font-openSans font-medium">0</h2>
        </div>
      </div>
      <div className="second-part flex justify-center items-center hover:bg-[#40adf6] px-3">
        <h2 className="text-white text-xs font-openSans font-medium tracking-wider">
          Made with ❤️ in India
        </h2>
      </div>
      <div className="third-part 400:flex justify-center items-center hidden hover:bg-[#40adf6]">
      <div className="react md:flex gap-1 px-4 hover:bg-[#40adf6] hidden">
        <img src={JS} alt="js" />
        <h2 className="text-white text-xs font-openSans font-medium">Babel Javascript</h2>
      </div>
        <div className="live sm:flex hidden px-4 hover:bg-[#40adf6] gap-1">
          <img src={LIVE} alt="notification bell" />
          <h2 className="text-white text-xs font-openSans font-medium">
            Go Live
          </h2>
        </div>

        <div className="hidden sm:flex hover:bg-[#40adf6]">
          <img src={PRETTIER} alt="prettier" />
          <h2 className="text-white text-xs font-openSans font-medium">
            Prettier
          </h2>
        </div>
        <img
          src={BELL}
          alt="notification bell"
          className="px-2 hover:bg-[#40adf6]"
        />
      </div>
    </div>
  );
};

export default Footer;
