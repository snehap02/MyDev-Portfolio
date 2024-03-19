import React from "react";
import namasteReact from "./nr.png";
import coursera from "./coursera.png";
import { CREDENTIAL } from "../utils/constants";

const Certification = () => {
  return (
    <div className="certification pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
      <div className="nums bg-[#1e1e1e] w-10 md:w-16 h-full flex flex-col items-center text-neutral-700 px-4 lg:-ml-4">
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
      <div className="align flex flex-col w-[80%]">
        <div className="banner uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl md:mt-4 md:tracking-wider flex flex-col md:flex-row md:gap-2 text-center md:justify-center text-neutral-500 -ml-4 font-semibold">
          <h1>Certificates</h1>
        </div>
        <div className="certificates flex flex-col lg:gap-8">
          <div className="certificate1 mt-7">
            <div className="one flex gap-2 xl:gap-8">
              <img src={namasteReact} alt="" className="w-10 h-10 mt-1 lg:w-20 lg:h-20" />
              <div className="details">
                <h1 className="text-white lg:text-xl">Namaste React Course</h1>
                <h2 className="text-xs lg:text-base text-neutral-500 cursor-pointer">
                  <a href="https://namastedev.com/" target="blank">
                    NamasteDev.com
                  </a>
                </h2>
                <div className="flex gap-2 text-white curspor-pointer bg-neutral-700 justify-center items-center py-2 rounded-full ring-2 ring-neutral-500 bg-opacity-45 mt-2 w-44">
                  <a
                    href="https://namastedev.com/sneha.purkayastha96/certificates/namaste-react"
                    target="blank"
                    className="text-xs"
                  >
                    Show credential
                  </a>
                  <img src={CREDENTIAL} alt="credential" />
                </div>
                <div className="skills flex text-xs lg:text-sm mt-3 text-neutral-500">
                  <h2>Skills:</h2>
                  <div className="flex flex-wrap xl:w-[46rem]">
                    <h3>
                      Software Development, Javascript Libraries, Front-end
                      Development, Javascript, React.js, Redux.js, Debugging,
                      Parcel, npm, TailwindCSS, React Hooks
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate2 mt-7">
            <div className="one flex gap-2 xl:gap-8">
              <img src={coursera} alt="coursera" className="w-10 h-10 mt-1 lg:w-20 lg:h-20" />
              <div className="details">
                <div className="flex flex-col">
                  <h1 className="text-white lg:text-xl">
                    Introduction to HTML, CSS & Javascript
                  </h1>
                  <h2 className="text-xs lg:text-base text-neutral-500 cursor-pointer">
                    <a href="https://www.coursera.org/" target="blank">
                      coursera.org
                    </a>
                  </h2>
                  <h3 className="font-bold text-xs text-neutral-400 lg:text-sm">IBM</h3>
                </div>

                <div className="flex gap-2 text-white curspor-pointer bg-neutral-700 justify-center items-center py-2 rounded-full ring-2 ring-neutral-500 bg-opacity-45 mt-2 w-44">
                  <a
                    href="https://www.coursera.org/account/accomplishments/records/XQYA4JDY7LMC"
                    target="blank"
                    className="text-xs"
                  >
                    Show credential
                  </a>
                  <img src={CREDENTIAL} alt="credential" />
                </div>
                <div className="skills flex text-xs lg:text-sm mt-3 text-neutral-500">
                  <h2>Skills:</h2>
                  <div className="flex flex-wrap">
                    <h3>HTML, CSS, Javascript, Front-end developement</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate3 mt-7">
            <div className="one flex gap-2 xl:gap-8">
              <img src={coursera} alt="coursera" className="w-10 h-10 mt-1 lg:w-20 lg:h-20" />
              <div className="details">
                <div className="flex flex-col">
                  <h1 className="text-white lg:text-xl">
                  Designing User Interfaces and Experiences (UI/UX)
                  </h1>
                  <h2 className="text-xs lg:text-base text-neutral-500 cursor-pointer">
                    <a href="https://www.coursera.org/" target="blank">
                      coursera.org
                    </a>
                  </h2>
                  <h3 className="font-bold text-xs text-neutral-400 lg:text-base">IBM</h3>
                </div>

                <div className="flex gap-2 text-white curspor-pointer bg-neutral-700 justify-center items-center py-2 rounded-full ring-2 ring-neutral-500 bg-opacity-45 mt-2 w-44">
                  <a
                    href="https://www.coursera.org/account/accomplishments/records/5SDM7QZRA5EU"
                    target="blank"
                    className="text-xs"
                  >
                    Show credential
                  </a>
                  <img src={CREDENTIAL} alt="credential" />
                </div>
                <div className="skills flex text-xs lg:text-sm mt-3 text-neutral-500">
                  <h2>Skills:</h2>
                  <div className="flex flex-wrap">
                    <h3>Website Wireframe, UI designs, Figma, User Experience</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate4 mt-7 pb-32">
            <div className="one flex gap-2 xl:gap-8">
              <img src={coursera} alt="coursera" className="w-10 h-10 mt-1 lg:w-20 lg:h-20" />
              <div className="details">
                <div className="flex flex-col">
                  <h1 className="text-white lg:text-xl">
                  Getting Started with Git and GitHub
                  </h1>
                  <h2 className="text-xs lg:text-base text-neutral-500 cursor-pointer">
                    <a href="https://www.coursera.org/" target="blank">
                      coursera.org
                    </a>
                  </h2>
                  <h3 className="font-bold text-xs text-neutral-400 lg:text-base">IBM</h3>
                </div>

                <div className="flex gap-2 text-white curspor-pointer bg-neutral-700 justify-center items-center py-2 rounded-full ring-2 ring-neutral-500 bg-opacity-45 mt-2 w-44">
                  <a
                    href="https://www.coursera.org/account/accomplishments/records/CP48NCQPHRK6"
                    target="blank"
                    className="text-xs"
                  >
                    Show credential
                  </a>
                  <img src={CREDENTIAL} alt="credential" />
                </div>
                <div className="skills flex text-xs lg:text-sm mt-3 text-neutral-500">
                  <h2>Skills:</h2>
                  <div className="flex flex-wrap">
                    <h3>Distributed Version Control System, Git, Github, Open Source, Cloning & Forking</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>


          



        </div>
      </div>
    </div>
  );
};

export default Certification;
