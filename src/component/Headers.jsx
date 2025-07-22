import { useState } from "react";
import { Link, Element } from "react-scroll";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="scroll-smooth">
      <header className="flex justify-between  py-8 tracking-wide bg-primary">
        <a className="font-bold text-main ml-5" href="#">
          Dheepaky
        </a>
        <nav className="hidden md:block  ">
          <ul className="flex text-main space-x-3 desktop ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500}>
                <a href="#resume">Resume</a>
              </Link>
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
          className={`fixed mobile-nav  block md:hidden right-0 w-64 bg-primary text-main z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${toggleMenu ? "translate-x-0" : "translate-x-full"}
        `}>
          <ul className="text-hover  ">
            <li>
              <a href="/">Home</a>
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
              <a href="/#resume">Resume</a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden relative w-6 h-6 z-50 group cursor-pointer ">
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
