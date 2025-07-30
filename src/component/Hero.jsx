import { Link, Element } from "react-scroll";
export default function Hero() {
  return (
    <section
      id="about"
      className=" flex flex-col text-main md:flex-row items-center justify-center px-4 md:px-10">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left  md:ml-36">
        <ul className="mt-5 py-1 flex items-center justify-center md:justify-start">
          <img src="/512.gif" width="45" height="45" alt="wave" />
          <li className="md:ml-4 ml-2">
            <span className="text-main md:text-4xl text-2xl font-highlight">
              Hi,
            </span>
          </li>
        </ul>
        <h1 className="text-main text-2xl md:text-4xl py-3 md:-ml-3 font-highlight">
          I'm Deepak
        </h1>
        <div className="flex justify-center md:justify-start mt-2 md:-ml-24  ">
          <img src="type.svg" alt="Typing SVG" />
        </div>
        <p className="flex justify-center md:text-2xl text-[20px] py-5 md:-ml-36 ">
          A Passionate Fullstack Developer crafting responsive, scalable web
          experiences with clean code and seamless functionality.
        </p>
        <div className="flex md:justify-start gap-5 py-5 justify-center">
          <a href="mailto:deepakk300712@gmail.com">
            <img src="mail.svg" alt="mail" className="w-10 h-10" />
          </a>
          <a href="https://github.com/dheepaky">
            <img src="github.svg" alt="github" className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/dheepaky">
            <img src="linkedin.svg" alt="linkedin" className="w-10 h-10" />
          </a>
        </div>
        <div className="flex  md:gap-20 gap-5 md:justify-start justify-center md:py-5 md:text-xl text-[15px]  md:-ml-30 ">
          <a className=" borderstyle md:w-40 w-32 cursor-pointer  rounded-3xl">
            <Link to="contact" smooth={true} duration={500}>
              <span>Contact Me</span>
            </Link>
          </a>

          <a
            className=" borderstyle md:w-40 w-32  rounded-3xl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1Rz2joBgUCr3NezmRdFN2y1Xiv-dYH5Xa/view">
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img src="pic.png" alt="" />
      </div>
    </section>
  );
}
