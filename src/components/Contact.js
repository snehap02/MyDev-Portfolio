import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Sneha Purkayastha - Contact";
  }, []);
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
      <div className="contact flex flex-col w-[80%] xl:gap-20">
        <div className="heading uppercase text-xl 500:text-3xl lg:text-4xl xl:text-5xl mt-20 md:tracking-wider flex flex-col md:flex-row md:gap-2 text-center md:justify-center text-commentGreen -ml-4 font-semibold italic">
          <h1>// Let's Get In Touch</h1>
        </div>
        <div className="details-mob flex flex-col mt-20 1132:hidden">
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
              <a
                href="mailto: sneha.purkayastha96@gmail.com"
                className="cursor-pointer hover:underline-offset-2 hover:underline"
                target="blank"
              >
                Gmail
              </a>
              '
            </span>
            <span>,</span>
            <br className="sm:hidden" />
            <span className="text-textOrange">'</span>

            <span className="text-textOrange">
              <a
                href="https://twitter.com/SnehaPurkayast8"
                target="blank"
                className="cursor-pointer hover:underline-offset-2 hover:underline"
              >
                Twitter
              </a>
              '
            </span>
            <span>,</span>
            <br className="sm:hidden" />
            <span className="text-textOrange">'</span>
            <span className="text-textOrange">
              <a
                href="https://www.linkedin.com/in/sneha-purkayastha-3b3aa1160/"
                target="blank"
                className="cursor-pointer hover:underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
              '
            </span>
            <br className="sm:hidden" />
            <span>]</span>
          </div>
        </div>
        <div className="details-web px-3 hidden 1132:flex 1077:flex-col lg:px-10">
          <h1 className="text-compYellow text-center mt-5 -ml-2 sm:text-lg md:text-xl md:-ml-0 md:mt-8">
            Feel free to reach out to me through any of the following channels:
          </h1>
          <div className="socials text-center text-white 1132:text-xl mt-10 -ml-10">
            <span className="text-textBlue">const</span>
            <span className="text-[#39caff]"> Contacts</span>
            <span> =</span>
            <span> {"{"}</span>
            <br />
            <span className="ml-96 text-textSky">email:</span>
            <span>
              {" "}
              <a
                href="mailto: sneha.purkayastha96@gmail.com"
                target="blank"
                className="cursor-pointer text-textOrange hover:underline-offset-2 hover:underline"
              >
                {"'"}sneha.purkayastha96@gmail.com{"'"}
              </a>{" "}
              ,
            </span>
            <br />
            <span className="ml-[15rem] text-textSky">twitter:</span>
            <span>
              {" "}
              <a
                href="https://twitter.com/SnehaPurkayast8"
                target="blank"
                className="cursor-pointer text-textOrange hover:underline-offset-2 hover:underline"
              >
                {"'"}@SnehaPurkayast8{"'"}
              </a>{" "}
              ,
            </span>
            <br />
            <span className="ml-[16.2rem] text-textSky">linkedin:</span>
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/sneha-purkayastha-3b3aa1160/"
                target="blank"
                className="cursor-pointer text-textOrange hover:underline-offset-2 hover:underline"
              >
                {"'"}Sneha Purkayastha{"'"}
              </a>{" "}
              ,
            </span>
            <br />
            <span className="-ml-32"> {"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
