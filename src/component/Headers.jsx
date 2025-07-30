import { useState } from "react";
import { Link, Element } from "react-scroll";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="scroll-smooth">
      <header className="flex justify-between py-8 tracking-wide bg-primary">
        <a className="font-bold text-main ml-5 " href="/">
          <img src="/lg.png" alt="" className="h-[30px] w-[30px] " />
        </a>
        <nav className="hidden md:block  ">
          <ul className="flex text-main space-x-3 desktop ">
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Rz2joBgUCr3NezmRdFN2y1Xiv-dYH5Xa/view">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <div
            onClick={() => setToggleMenu(false)}
            className="fixed inset-0 bg-white backdrop-blur-sm opacity-50 z-40"
          />
        )}

        {/* Slide-in Sidebar Menu */}
        <div
          className={`fixed mobile-nav   block md:hidden right-0 w-64 bg-primary text-main z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${toggleMenu ? "translate-x-0" : "translate-x-full"}
        `}>
          <ul className="text-hover  ">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/#project">Projects</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Rz2joBgUCr3NezmRdFN2y1Xiv-dYH5Xa/view">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden relative w-6 h-6 z-50 group cursor-pointer mr-2">
          <span
            className={`block absolute h-0.5 w-6 bg-[#0a0a0a] transform transition duration-300 ease-in-out
      ${toggleMenu ? "rotate-45 top-3.5" : "top-2"}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-[#0a0a0a] transition-all duration-300 ease-in-out
      ${toggleMenu ? "opacity-0" : "top-3.5"}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-[#0a0a0a] transform transition duration-300 ease-in-out
      ${toggleMenu ? "-rotate-45 top-3.5" : "top-5"}`}
          />
        </button>
      </header>
    </section>
  );
}
