import React from "react";

const Contact = () => {
  const arr = ["jhdlkjshd"];
  console.log(arr);
  return (
    <div className="contact pt-20 ml-10 px-3 sm:px-4 lg:ml-52 bg-[#1e1e1e] min-h-[100vh] min-w-[100vw] overflow-x-hidden flex">
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
      <div className="contact flex flex-col w-[80%]">
        <div className="heading uppercase text-xl 500:text-3xl lg:text-4xl mt-20 md:tracking-wider flex flex-col md:flex-row md:gap-2 text-center md:justify-center text-commentGreen -ml-4 font-semibold italic">
          <h1>// Let's Get In Touch</h1>
        </div>
        <div className="details-mob flex flex-col mt-20 lg:hidden">
          <h1 className="text-compYellow text-center -mt-6 -ml-2 sm:text-lg md:text-xl md:-ml-0 px-10">
            Feel free to reach out to me through any of the following channels:
          </h1>
          <div className="socials text-white mt-20 text-center sm:text-2xl text-xl">
            <span className="text-textBlue">const</span>
            <span className="text-[#39caff]"> contacts</span>
            <span> =</span>
            <span> [</span>

            <span className="text-textOrange">
              <br className="sm:hidden" />'
              <a href="" className="cursor-pointer">
                Gmail
              </a>
              '
            </span>
            <span>,</span>
            <br className="sm:hidden" />
            <span className="text-textOrange">'</span>

            <span className="text-textOrange">
              <a href="" className="cursor-pointer">
                Twitter
              </a>
              '
            </span>
            <span>,</span>
            <br className="sm:hidden" />
            <span className="text-textOrange">'</span>
            <span className="text-textOrange">
              <a href="" className="cursor-pointer">
                LinkedIn
              </a>
              '
            </span>
            <br className="sm:hidden" />
            <span>]</span>
          </div>
        </div>
        <div className="details-web px-3 hidden lg:flex lg:flex-col lg:px-10">
          <h1 className="text-compYellow text-center mt-5 -ml-2 sm:text-lg md:text-xl md:-ml-0 md:mt-8">
            Feel free to reach out to me through any of the following channels:
          </h1>
          <div className="socials text-center text-white bg-red-500 text-xs 375:text-sm">
            <span>const</span>
            <span> Contacts</span>
            <span> =</span>
            <span> {"{"}</span>
            <br />
            <span className="lg:ml-72">email:</span>
            <span>
              {" "}
              <a href="" className="cursor-pointer">
                sneha.purkayastha96@gmail.com
              </a>{" "}
              ,
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
