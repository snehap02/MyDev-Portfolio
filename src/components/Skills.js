import React from "react";

const Skills = () => {
  return (
    <div className="skills pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
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
      <div className="skillsSection flex flex-col px-4 -ml-6 justify-evenly">
        <div className="languageSection flex flex-col px-4 -mt-8 md:-mt-8">
          <h1 className="text-commentGreen uppercase italic tracking-wider text-xl sm:text-2xl lg:text-[27px]">
            // Languages I Speak
          </h1>
          <div className="lang flex gap-4 mt-4 lg:gap-10">
            <h2 className="text-white text-lg bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">HTML</h2>
            <h2 className="text-white text-lg bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">CSS</h2>
            <h2 className="text-white text-lg bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">JS</h2>
          </div>
        </div>
        <div className="frameworkSection flex flex-col px-4">
          <h1 className="text-commentGreen uppercase italic tracking-wider text-xl sm:text-2xl lg:text-[27px]">
            // Frameworks I Use
          </h1>
          <div className="lang flex gap-6 flex-wrap mt-4">
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">Tailwind CSS</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">React</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">Bootstrap</h2>
          </div>
        </div>
        <div className="toolsSection flex flex-col px-4">
          <h1 className="text-commentGreen uppercase italic tracking-wider text-xl sm:text-2xl lg:text-[27px]">
            // Tools In My Toolkit
          </h1>
          <div className="lang flex gap-6 flex-wrap mt-4">
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">GIT</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">github</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">vs code</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">codepen</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">wordpress</h2>
          </div>
        </div>
        <div className="toolsSection flex flex-col pb-10 px-4">
          <h1 className="text-commentGreen uppercase italic tracking-wider text-xl sm:text-2xl lg:text-[27px]">
            // Design Tools I Navigate
          </h1>
          <div className="lang flex gap-6 flex-wrap mt-4">
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">figma</h2>
            <h2 className="text-white text-lg uppercase bg-neutral-700 rounded-md px-3 sm:text-xl sm:px-5 sm:py-1">Thunkable</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// EEC759
