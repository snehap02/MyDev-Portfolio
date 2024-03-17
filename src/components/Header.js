import React from "react";
import {
  CLOSE,
  LAYOUT,
  LAYOUT_PANEL,
  LAYOUT_SIDEBAR_LEFT,
  LAYOUT_SIDEBAR_RIGHT,
  LEFT_ARROW,
  MINIMIZE,
  RESTORE,
  RIGHT_ARROW,
  SEARCH_BTN,
  VSCODE_LOGO,
} from "../utils/constants";

const Header = () => {
  return (
    <div className="menu-bar">
      <header className="h-9 bg-[#3a3a3a] fixed top-0 flex justify-between items-center w-full z-[10000]">
        <div className="first-div flex justify-center items-center gap-4 text-[12px] font-medium text-neutral-400 font-openSans ml-2">
          <img src={VSCODE_LOGO} alt="vscode logo" className="w-5" />
          <div className="menu hidden 1404:flex justify-center items-center gap-1">
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">File</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Edit</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Selection</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">View</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Go</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Run</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Terminal</h3>
            <h3 className="px-2 py-2 cursor-pointer hover:bg-neutral-600">Help</h3>
          </div>
        </div>
        <div className="second-div hidden 400:flex justify-center items-center gap-3 xl:-ml-24">
          <div className="arrows flex gap-2">
            <img src={LEFT_ARROW} alt="left arrow" />
            <img src={RIGHT_ARROW} alt="right arrow" />
          </div>
          <div className="name-bar flex justify-center items-center bg-[#484848] 400:px-2 sm:px-20 lg:px-48 md:px-28 py-[0.2rem] rounded-md border border-neutral-500 text-neutral-300 font-openSans text-[13px] gap-3">
            <img src={SEARCH_BTN} alt="search button" />
            <h2>Sneha Purkayastha-Portfolio</h2>
          </div>
        </div>
        <div className="third-div flex justify-center items-center lg:gap-2">
          <div className="layouts md:flex justify-center items-center gap-3 hidden">
            <img src={LAYOUT_SIDEBAR_LEFT} alt="layout left" />
            <img src={LAYOUT_PANEL} alt="layout panel" />
            <img src={LAYOUT_SIDEBAR_RIGHT} alt="layout right" />
            <img src={LAYOUT} alt="layout" />
          </div>

          <div className="window flex">
            <img
              src={MINIMIZE}
              alt="minimize"
              className="px-2 lg:px-3 py-2 cursor-pointer hover:bg-neutral-600"
            />
            <img
              src={RESTORE}
              alt="restore"
              className="px-2 lg:px-3 py-2 cursor-pointer hover:bg-neutral-600"
            />
            <img
              src={CLOSE}
              alt="close"
              className="px-2 lg:px-3 py-2 hover:bg-red-700 cursor-pointer"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
