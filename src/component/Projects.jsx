import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Projectmodel from "./Projectmodel";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Portfolio webApp",
    tech: (
      <span className="flex  justify-center p-3 gap-3">
        <FaReact className="h-5 w-5 text-black" />
        <RiTailwindCssFill className="h-5 w-5 text-black" />
        <FaDocker className="h-5 w-5 text-black" />
      </span>
    ),
    image: "/project/portfolio.jpg",
    gif: "/project/portfolio.gif",
    description: "A Portfolio webApp is modern website simple portfolio.",
    date: "1 week",
    link: "https://dheepaky-portfolio.vercel.app/",
    link2: "https://github.com/dheepaky/dheepaky-portfolio",
  },
  {
    id: 2,
    title: "VConnect Social Media Forum",
    tech: (
      <span className="flex  justify-center p-3 gap-3">
        <SiMongodb className="h-5 w-5 text-black" />
        <SiExpress className="h-5 w-5 text-black" />
        <FaReact className="h-5 w-5 text-black" />
        <FaNodeJs className="h-5 w-5 text-black" />
        <RiTailwindCssFill className="h-5 w-5 text-black" />
      </span>
    ),
    image: "/project/forum.png",
    gif: "/project/mern.gif",
    description:
      "A VConnect Social Media forum mern stack project for communities to share and discuss topics.",
    date: "6 months",
    link: "https://vconnect-socialmedia-forum.koyeb.app/",
    link2: "https://github.com/dheepaky/Vconnect-Socialmedia-Forum",
  },
  {
    id: 3,
    title: "Fullstack Ecommerce WebApp",
    tech: (
      <span className="flex  justify-center p-3 gap-3">
        <FaHtml5 className="h-5 w-5 text-black" />
        <FaCss3Alt className="h-5 w-5 text-black" />
        <TbBrandJavascript className="h-5 w-5 text-black" />
        <FaPhp className="h-5 w-5 text-black" />
        <GrMysql className="h-5 w-5 text-black" />
      </span>
    ),
    image: "/project/ecommerce.png",
    gif: "/project/Ecommerce.gif",
    description:
      "An ecommerce site shopping cart with product listings, categories product and cart.",
    date: "3 months",
    link: " ",
    link2: "https://github.com/dheepaky/fancyjewels-ecommerce",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section id="project" className="flex md:justify-start justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl fade font-bold mb-4 font-head text-center ">
          Projects
        </h1>

        <div className="flex flex-col flex-wrap   md:flex-row gap-10 xl:w-[80rem] lg:w-[80rem] sm:w-[60rem] w-[22.5rem] mt-7 justify-center">
          {projectData.map((project, index) => (
            <div
              className="shadows scrollreveal cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              <motion.div
                key={project.id}
                ref={ref}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[15rem] border-2 border-gray-100"
                />
                <div className="bg-gray-300 text-center">
                  <p className="text-main">{project.title}</p>
                  {/* <p className="text-main">{project.date}</p> */}
                  <p className="text-gray-200">{project.tech}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Projectmodel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
