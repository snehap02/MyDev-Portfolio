import React from "react";

const Skills = () => {
  return (
    <div className="skills pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
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
      <div className="skillsSec flex flex-col">
        <div className="languages w-64 sm:w-96 text-white text-lg">
          <h1 className="uppercase">Languages I Speak</h1>
          <div className="lang flex gap-6 flex-wrap md:flex-nowrap">
            <h1 className="px-5 py-1 rounded-md bg-red-500 cursor-pointer text-sm">
              html
            </h1>
            <h1 className="px-6 py-1 rounded-md bg-blue-600 cursor-pointer text-sm">
              css
            </h1>
            <h1 className="px-8 py-1 rounded-md bg-amber-500 cursor-pointer text-sm">
              JS
            </h1>
          </div>
        </div>
        <div className="frameworks w-64 text-white text-lg">
          <h1 className="uppercase">Frameworks I Use</h1>
          <div className="framework flex flex-wrap md:flex-nowrap gap-6">
            <h1 className="px-5 py-1 rounded-md bg-sky-500 cursor-pointer text-sm">
              TailwindCSS
            </h1>
            <h1 className="px-6 py-1 rounded-md bg-blue-500 cursor-pointer text-sm">
              React
            </h1>
            <h1 className="px-8 py-1 rounded-md bg-purple-500 cursor-pointer text-sm">
              Bootstrap
            </h1>
          </div>
        </div>
        <div className="tools w-full text-white text-lg">
          <h1 className="uppercase">Tools In My Toolkit</h1>
          <div className="tool flex flex-wrap md:flex-nowrap gap-6">
            <h1 className="px-5 py-1 rounded-md bg-sky-500 cursor-pointer h-8 text-sm">
              Git
            </h1>
            <h1 className="px-6 py-1 rounded-md bg-blue-500 cursor-pointer h-8 text-sm">
              Github
            </h1>
            <h1 className="px-10 py-1 rounded-md bg-purple-500 cursor-pointer h-8 text-sm">
              VS Code
            </h1>
            <h1 className="px-8 py-1 rounded-md bg-purple-500 cursor-pointer h-8 text-sm">
              Wordpress
            </h1>
            <h1 className="px-8 py-1 rounded-md bg-purple-500 cursor-pointer h-8 text-sm">
              Codepen
            </h1>
          </div>
        </div>
        <div className="designs w-64 text-white text-lg">
          <h1 className="uppercase">Design Tools I Navigate</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
