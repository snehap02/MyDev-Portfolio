import React from "react";
import about from "./myImg.jpg";
import { INDIA } from "../utils/constants";

const About = () => {
  return (
    <div className="about pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
      <div className="nums bg-[#1e1e1e] w-10 md:w-16 h-full flex flex-col items-center text-neutral-700 px-4">
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
        <h2>5</h2>
        <h2>6</h2>
        <h2>7</h2>
        <h2>8</h2>
        <h2>9</h2>
        <h2 className="-ml-2">10</h2>
        <h2 className="-ml-2">11</h2>
        <h2 className="-ml-2">12</h2>
        <h2 className="-ml-2">13</h2>
        <h2 className="-ml-2">14</h2>
        <h2 className="-ml-2">15</h2>
        <h2 className="-ml-2">16</h2>
        <h2 className="-ml-2">17</h2>
        <h2 className="-ml-2">18</h2>
        <h2 className="-ml-2">19</h2>
        <h2 className="-ml-2">20</h2>
        <h2 className="-ml-2">21</h2>
        <h2 className="-ml-2">22</h2>
        <h2 className="-ml-2">23</h2>
        <h2 className="-ml-2">24</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div className="image one lg:p-6 p-4 -ml-16 lg:-ml-96 1337:-ml-52 1496:-ml-28 lg:-mt-16">
          <img
            src={about}
            alt="image"
            className="lg:w-[28rem] w-[16rem] 375:w-[18rem] object-cover"
          />
        </div>
        <div className="px-8 -ml-7 flex flex-col tracking-wider">
          <div className="readme bg-opacity-70 text-white px-1">
            <h1 className="text-3xl sm:text-4xl">README.md</h1>
          </div>
          <h2 className="about1 mt-5 sm:mt-8 text-base sm:text-lg lg:text-base lg:w-[48rem] z-[9999]">
            <span className="text-textOrange">
              Hello! I'm Sneha Purkayastha
            </span>
            <span className="text-white">
              , a proficient front-end developer{" "}
            </span>
            <span className="text-commentGreen flex gap-1">
              hailing from Assam
              <img src={INDIA} />.
            </span>{" "}
          </h2>
          <h2 className="mt-2 about2 text-base sm:text-lg lg:text-base lg:w-[46rem] z-[9999]">
            <span className="text-compYellow">With a passion for transforming concepts into reality,</span><span className="text-white"> my
            specialization lies in crafting responsive designs.</span> {" "}
          </h2>
          <h2 className="mt-2 about3 text-base sm:text-lg lg:text-base lg:w-[46rem] z-[9999]">
            <span className="text-textBlue">I ensure that your ideas not only come to life</span><span className="text-compYellow"> but also thrive in
            the</span><span className="text-textPink"> dynamic digital landscape.</span>
          </h2>
          <h2 className="mt-2 about4 text-base sm:text-lg pb-28 lg:text-base lg:w-[46rem] z-[9999]">
            <span className="text-textSky">Let's collaborate to elevate your digital presence</span><span className="text-textPink"> and create a
            seamless user experience.</span>
          </h2>
          {/* <h2 className="hidden lg:flex -mt-14">
            I Write on
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default About;
