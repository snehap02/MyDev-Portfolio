import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Sneha Purkayastha - Home";
  }, []);
  return (
    <div className="home pt-20 ml-10 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
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
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
      </div>
      <div className="mobile xl:hidden flex flex-col -ml-2 375:-ml-0">
        <div className="small font-bold text-[28px] pt-20 375:text-3xl 450:text-4xl 500:text-5xl sm:text-6xl md:text-7xl text-textBlue">
          <h1 className="px-3 uppercase">&lt; Sneha</h1>
          <h1 className="px-3 uppercase">Purkayastha &gt;</h1>
        </div>
        <h2 className="desc text-compYellow text-lg ml-3 mt-4 375:text-xl 450:text-2xl 500:text-3xl md:text-4xl">
          <span className="text-textPink">A</span> Front-end Developer
        </h2>
        <h3 className="details px-10 -ml-8 mt-8 text-textSky sm:text-xl">
          I craft visually appealing and user-friendly websites.
        </h3>
        <button className="resume mt-10 w-48 sm:w-56 text-left ml-2 bg-textOrange text-neutral-900 cursor-pointer px-2 py-3 font-bold rounded-md hover:bg-opacity-80 text-sm sm:text-base sm:px-3">
          <a>Download My Resume</a>
        </button>
      </div>
      <div className="desktop hidden xl:flex">
        <div className="code text-sm mt-20 font-medium">
          {/* 🟡 */}
          <div className="text-textBlue text-opacity-40">&lt;div&gt;</div>
          <div className="text-textBlue ml-2 mt-2 text-opacity-40">&lt;div&gt;</div>
          <h1 className="mt-2 text-opacity-40">
            <span className="text-textBlue ml-3 text-opacity-40">&lt;h1&gt;</span>
            <span className="text-white text-opacity-40">&lt;Sneha Purkayastha&gt;</span>
            <span className="text-textBlue text-opacity-40">&lt;/h1&gt;</span>
          </h1>
          <div className="text-textBlue ml-2 mt-2 text-opacity-40">&lt;/div&gt;</div>
          <h2 className="mt-2 text-opacity-40">
            <span className="text-textBlue ml-2 text-opacity-40">&lt;h2&gt;</span>
            <span className="text-white text-opacity-40">A Front-end Developer</span>
            <span className="text-textBlue text-opacity-40">&lt;/h2&gt;</span>
          </h2>
          <h3 className="mt-2 text-opacity-40">
            <span className="text-textBlue ml-2 text-opacity-40">&lt;h3&gt;</span>
            <span className="text-white text-opacity-40">
              I craft visually appealing and user-friendly websites.
            </span>
            <span className="text-textBlue text-opacity-40">&lt;/h3&gt;</span>
          </h3>
          <button className="mt-2 text-opacity-40">
            <span className="text-textBlue ml-2 text-opacity-40">&lt;button&gt;</span>
            <span className="text-textBlue text-opacity-40">&lt;a&gt;</span>
            <span className="text-white text-opacity-40">Download My Resume</span>
            <span className="text-textBlue text-opacity-40">&lt;/a&gt;</span>
            <span className="text-textBlue text-opacity-40">&lt;/button&gt;</span>
          </button>
          <div className="text-textBlue mt-2 text-opacity-40">&lt;/div&gt;</div>

          {/* 🟡 */}
        </div>
        <div className="output flex flex-col text-right -ml-48 1496:-ml-0 mt-10">
        <div className="small font-bold text-6xl pt-20 text-textBlue">
          <h1 className="px-3 uppercase">&lt; Sneha</h1>
          <h1 className="px-3 uppercase">Purkayastha &gt;</h1>
        </div>
        <h2 className="desc text-compYellow text-3xl ml-3 mt-4">
          <span className="text-textPink">A</span> Front-end Developer
        </h2>
        <div>
        <h3 className="details mt-8 text-textSky text-xl">
          I craft visually appealing and user-friendly websites.
        </h3>
        </div>
        
        <div>
        <button className="resume mt-10 w-48 sm:w-56 text-left ml-2 bg-textOrange text-neutral-900 cursor-pointer px-2 py-3 font-bold rounded-md hover:bg-opacity-80 sm:text-base sm:px-3">
          <a>Download My Resume</a>
        </button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
