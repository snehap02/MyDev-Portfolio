import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DOT, EDITOR, JAVASCRIPT } from "../utils/constants";
import Home from "./Home";

const Menu = () => {
  const [homeChange, setHomeChange] = useState("");
  const [aboutChange, setAboutChange] = useState("");
  const [skillsChange, setSkillsChange] = useState("");
  const [projectChange, setProjectChange] = useState("");
  const [certificateChange, setCertificateChange] = useState("");
  const [contactChange, setContactChange] = useState("");

  const location = useLocation();
  // console.log(location.pathname)

  const isActive = (path) => location.pathname === path;

  const onHomeChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setHomeChange();
    if (list2.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list2.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list3.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list3.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list4.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list4.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list5.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list5.classList.remove("bg-[#1e1e1e]", "border-t-4", "border-yellow-500");
      }
      if (list6.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list6.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  };
  const onAboutChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list2.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setAboutChange();
    if (list.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list3.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list3.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list4.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list4.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list5.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list5.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list6.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list6.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  };
  const onSkillsChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list3.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setSkillsChange();
    if (list.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list2.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list2.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list4.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list4.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list5.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list5.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list6.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list6.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  }
  const onProjectChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list4.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setProjectChange();
    if (list.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list2.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list2.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list3.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list3.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list5.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list5.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list6.classList.contains("bg-[#1e1e1e]", "border-t-4", "border-yellow-500")) {
        list6.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  }
  const onCertificateChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list5.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setCertificateChange();
    if (list.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list2.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list2.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list3.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list3.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list4.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list4.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list6.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list6.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  }
  const onContactChange = () => {
    const list = document.querySelector(".listOne");
    const list2 = document.querySelector(".listTwo");
    const list3 = document.querySelector(".listThree");
    const list4 = document.querySelector(".listFour");
    const list5 = document.querySelector(".listFive");
    const list6 = document.querySelector(".listSix");
    list6.classList.add("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
    setContactChange();
    if (list.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list2.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list2.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list3.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list3.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list4.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list4.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
      if (list5.classList.contains("bg-[#1e1e1e]", "border-t-2", "border-yellow-500")) {
        list5.classList.remove("bg-[#1e1e1e]", "border-t-2", "border-yellow-500");
      }
  }
  return (
    <div className="list-items w-full h-10 bg-[#2d2c2c] mt-8 text-white fixed top-0 overflow-x-scroll overflow-scroll lg:overflow-x-hidden overflow-y-hidden no-scrollbar">
      <ul className="lists flex text-white py-2 w-[190%] sm:w-[120%] md:w-[100%] lg:w-[100%] xl:w-[70%] ml-7 lg:ml-[200px] -mt-[0.2rem]">
        <li className={`listOne ${isActive('/') && 'bg-[#1e1e1e] border-t-2 border-yellow-500'}`}>
          <Link
            to="/"
            className="flex gap-2 px-6 py-2"
            onClick={onHomeChange}
          >
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="textOne text-sm font-openSans text-neutral-400">
              Home.js
            </h2>
          </Link>
        </li>
        <li className="listTwo">
          <Link
            to="/about"
            className="flex gap-2 px-6 py-2"
            onClick={onAboutChange}
          >
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="text-sm font-openSans text-neutral-400">About.js</h2>
          </Link>
        </li>
        <li className="listThree">
          <Link to="/skills" className="flex gap-2 px-6 py-2" onClick={onSkillsChange}>
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="text-sm font-openSans text-neutral-400">
              Skills.js
            </h2>
          </Link>
        </li>
        <li className="listFour">
          <Link to="/projects" className="flex gap-2 px-6 py-2" onClick={onProjectChange}>
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="text-sm font-openSans text-neutral-400">
              Projects.js
            </h2>
          </Link>
        </li>
        <li className="listFive">
          <Link to="/certification" className="flex gap-2 px-6 py-2" onClick={onCertificateChange}>
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="text-sm font-openSans text-neutral-400">
              Certification.js
            </h2>
          </Link>
        </li>
        <li className="listSix">
          <Link to="/contact" className="flex gap-2 px-6 py-2" onClick={onContactChange}>
            <img src={JAVASCRIPT} alt="extension" />
            <h2 className="text-sm font-openSans text-neutral-400">
              Contact.js
            </h2>
          </Link>
        </li>

        <div className="hidden xl:flex pt-2 px-4 gap-4 right-0 fixed">
            <img src={EDITOR} alt="editor" />
            <img src={DOT} alt="dots" />
        </div>
      </ul>
    </div>
  );
};

export default Menu;
