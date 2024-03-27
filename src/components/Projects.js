import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Sneha Purkayastha - Projects";
  }, []);

  return (
    <div className="projects pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
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
      <div className="projectsSec flex flex-col w-[80%]">
        <div className="heading uppercase text-xl 500:text-3xl lg:text-4xl mt-2 md:tracking-wider text-commentGreen -ml-8 font-semibold italic text-center">
          <h1>// Projects</h1>
        </div>
        <div className="project-container">
          <div className="project1">
            <div className="image"></div>
            <div className="title"></div>
            <div className="desc"></div>
            <div className="languages"></div>
            <div className="links"></div>
          </div>
          <div className="project2"></div>
          <div className="project3"></div>
          <div className="project4"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
