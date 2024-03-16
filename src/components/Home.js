import React from "react";

const Home = () => {
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
      <div className="mobile lg:hidden flex flex-col -ml-2 375:-ml-0">
        <div className="small font-bold text-[28px] pt-20 375:text-3xl 450:text-4xl 500:text-5xl sm:text-6xl md:text-7xl text-blue">
          <h1 className="px-3 uppercase">&lt; Sneha</h1>
          <h1 className="px-3 uppercase">Purkayastha &gt;</h1>
        </div>
        <h2 className="desc text-yellow text-lg ml-3 mt-4 375:text-xl 450:text-2xl 500:text-3xl md:text-4xl">
          <span className="text-pink">A</span> Front-end Developer
        </h2>
        <h3 className="details px-10 -ml-8 mt-8 text-sky sm:text-xl">
          I craft visually appealing and user-friendly websites.
        </h3>
        <button className="resume mt-10 w-52 text-left ml-2 bg-orange text-neutral-900 cursor-pointer px-2 py-3 font-bold rounded-md hover:bg-opacity-80">
          <a>Download My Resume</a>
        </button>
      </div>
      <div className="desktop hidden lg:flex"></div>
    </div>
  );
};

export default Home;
