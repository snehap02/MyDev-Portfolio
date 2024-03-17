import React from "react";
import { IMG } from "../utils/constants";

const About = () => {
  return (
    <div className="about pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden">
      <div className="image">
        <img src="./public/images/aboutImg.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
