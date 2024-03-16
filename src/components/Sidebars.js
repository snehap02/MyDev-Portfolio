import React from "react";
import {
  ARROW_DOWN,
  ARROW_RIGHT,
  COMPONENTS,
  DIST,
  DOT,
  GITHUB,
  GITIGNORE,
  GMAIL,
  HASHNODE,
  JAVASCRIPT,
  JS,
  LINKEDIN,
  NODE_MODULES,
  PARCEL_CACHE,
  POSTCSS,
  PROFILE,
  SETTING,
  SRC,
  TWITTER,
  UTILS,
  INDEXCSS,
  HTML,
  PACKAGE_LOCK,
  TAILWIND
} from "../utils/constants";

const Sidebars = () => {
  return (
    <div className="sidebars flex fixed z-50">
      <div className="h-[100vh] w-10 bg-[#303030] sm:w-12 flex items-center gap-4 flex-col">
        <div className="github pt-10 hover:border-l-2 hover:border-white">
          <a href="https://github.com/snehap02" target="blank">
            <img
              src={GITHUB}
              alt="github
        "
            />
          </a>
        </div>
        <div className="twitter hover:border-l-2 hover:border-white">
          <a href="https://twitter.com/SnehaPurkayast8" target="blank">
            <img
              src={TWITTER}
              alt="twitter
        "
            />
          </a>
        </div>
        <div className="linkedin hover:border-l-2 hover:border-white">
          <a href="https://www.linkedin.com/in/sneha-purkayastha-3b3aa1160/" target="blank">
            <img
              src={LINKEDIN}
              alt="linkedin
        "
            />
          </a>
        </div>
        <div className="gmail pt-2 hover:border-l-2 hover:border-white px-1">
          <a href="mailto:sneha.purkayastha96@gmail.com" target="blank">
            <img
              src={GMAIL}
              alt="gmail
        "
            />
          </a>
        </div>
        <div className="hashnode pt-2 hover:border-l-2 hover:border-white px-[7px]">
          <a href="https://snehapurkayastha.hashnode.dev/" target="blank">
            <img
              src={HASHNODE}
              alt="hashnode
        "
            />
          </a>
        </div>

        <div className="2profile fixed bottom-10 flex flex-col gap-5">
          <div className="cursor-pointer">
            <img
              src={PROFILE}
              alt="profile
        "
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={SETTING}
              alt="setting
        "
            />
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-40 bg-[#252525] hidden lg:flex flex-col">
        <div className="explorer flex pt-[4.4rem] gap-14 h-2 px-5">
          <h2 className="font-openSans text-neutral-400 text-xs font-light -mt-6 ml-1">
            EXPLORER
          </h2>
          <img
            src={DOT}
            alt="dots"
            className=" cursor-pointer hover:bg-neutral-600 h-5 rounded-md -mt-[27px]"
          />
        </div>
        <div className="name flex h-7 cursor-pointer -mt-1">
          <img src={ARROW_DOWN} alt="arrow down" className="h-6" />
          <h2 className="font-openSans text-neutral-400 text-xs font-bold mt-1">
            PORTFOIO
          </h2>
        </div>
        <div className="parcel flex h-7 items-center hover:bg-[#303030] cursor-pointer -mt-2">
          <img src={ARROW_RIGHT} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={PARCEL_CACHE} alt="parcel-cache" />
            <h2 className="text-xs text-neutral-400 w-[100px]">
              .parcel-cache
            </h2>
          </div>
        </div>
        <div className="dist flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <img src={ARROW_RIGHT} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={DIST} alt="dist" />
            <h2 className="text-xs text-neutral-400 w-[100px]">dist</h2>
          </div>
        </div>
        <div className="node modules flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <img src={ARROW_RIGHT} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={NODE_MODULES} alt="node modules" />
            <h2 className="text-xs text-neutral-400 w-[100px]">node_modules</h2>
          </div>
        </div>
        <div className="src flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <img src={ARROW_DOWN} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={SRC} alt="src" />
            <h2 className="text-xs text-neutral-400 w-[100px]">src</h2>
          </div>
        </div>
        <div className="components flex h-7 items-center -mt-1 ml-3 hover:bg-[#303030] cursor-pointer">
          <img src={ARROW_DOWN} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={COMPONENTS} alt="components" />
            <h2 className="text-xs text-neutral-400 w-[100px]">components</h2>
          </div>
        </div>
        <div className="aboutjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="aboutjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">About.js</h2>
          </div>
        </div>
        <div className="cerificationjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="cerificationjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">
              Certification.js
            </h2>
          </div>
        </div>
        <div className="contactjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="contactjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Contact.js</h2>
          </div>
        </div>
        <div className="aboutjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="footerjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Footer.js</h2>
          </div>
        </div>
        <div className="headerjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="headerjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Header.js</h2>
          </div>
        </div>
        <div className="homejs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="homejs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Home.js</h2>
          </div>
        </div>
        <div className="menujs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="menujs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Menu.js</h2>
          </div>
        </div>
        <div className="projectjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="projectjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Project.js</h2>
          </div>
        </div>
        <div className="sidebarsjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="sidebarsjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Sidebars.js</h2>
          </div>
        </div>
        <div className="skillsjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="skillsjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">Skills.js</h2>
          </div>
        </div>
        <div className="utils flex h-7 items-center -mt-1 ml-3 hover:bg-[#303030] cursor-pointer">
          <img src={ARROW_DOWN} alt="arrow down" className="h-6 ml-3" />
          <div className="folder flex gap-1">
            <img src={UTILS} alt="utils" />
            <h2 className="text-xs text-neutral-400 w-[100px]">utils</h2>
          </div>
        </div>
        <div className="constantsjs flex h-7 items-center -mt-1 ml-14 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="constantsjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">constants.js</h2>
          </div>
        </div>
        <div className="appjs flex h-7 items-center -mt-1 ml-12 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1">
            <img src={JAVASCRIPT} alt="appjs" />
            <h2 className="text-xs text-neutral-400 w-[100px]">App.js</h2>
          </div>
        </div>
        <div className="gitignore flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={GITIGNORE} alt="gitignore" />
            <h2 className="text-xs text-neutral-400 w-[100px]">.gitignore</h2>
          </div>
        </div>
        <div className="postcss flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={POSTCSS} alt="postcss" />
            <h2 className="text-xs text-neutral-400 w-[100px]">.postcssrc</h2>
          </div>
        </div>
        <div className="css flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={INDEXCSS} alt="css" />
            <h2 className="text-xs text-neutral-400 w-[100px]">index.css</h2>
          </div>
        </div>
        <div className="html flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={HTML} alt="html" />
            <h2 className="text-xs text-neutral-400 w-[100px]">index.html</h2>
          </div>
        </div>
        <div className="package lock flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={PACKAGE_LOCK} alt="package lock" />
            <h2 className="text-xs text-neutral-400 w-[100px]">package-lock.json</h2>
          </div>
        </div>
        <div className="package lock flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={PACKAGE_LOCK} alt="package json" />
            <h2 className="text-xs text-neutral-400 w-[100px]">package.json</h2>
          </div>
        </div>
        <div className="tailwind flex h-7 items-center -mt-1 hover:bg-[#303030] cursor-pointer">
          <div className="folder flex gap-1 ml-9">
            <img src={TAILWIND} alt="tailwind" />
            <h2 className="text-xs text-neutral-400 w-[100px]">tailwind.config.js</h2>
          </div>
        </div>
      </div>
      <div className="line w-[0.03rem] h-[15.4rem] bg-neutral-600 mt-[208px] -ml-[125px]"></div>
    </div>
  );
};

export default Sidebars;
