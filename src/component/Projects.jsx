import { useRef } from "react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import Projectmodel from "./Projectmodel";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  // triggercard
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeUp1 = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const fadeUp2 = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.3 } },
  };
  const fadeUp3 = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.8 } },
  };
  return (
    <section id="project" className="flex md:justify-start justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4 md:py-1  font-head text-center mt-28 md:mt-30">
          Projects
        </h1>
        {/* 1 */}

        <div className="flex-col flex-wrap justify-center flex md:flex-row xl:w-[80rem] lg:w-[80rem] sm:w-[60rem] w-[22.5rem] gap-10 mt-10 md:mt-10 ">
          <motion.div
            ref={ref}
            variants={fadeUp1}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="shadows open " onClick={() => setIsOpen(true)}>
              <video
                src="Ecommerce.mp4"
                alt="view"
                autoPlay="true"
                disablePictureInPicture="true"
                loop="true"
                className="h-[15rem] w-[20rem] border-2 border-blue-200 "
              />
              {/* context */}
              <div className="bg-black text-center">
                <p
                  className="
            text-white">
                  Mern Stack Web Development
                </p>
                <p
                  className="
            text-gray-200">
                  MongoDB React Node
                </p>
              </div>
            </div>
            {isOpen && <Projectmodel onClose={() => setIsOpen(false)} />}
          </motion.div>
          {/* 2 */}
          <motion.div
            ref={ref}
            variants={fadeUp2}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="shadows ">
              <img
                src="mern.jpg"
                alt=""
                className="h-[11rem] border-2 border-blue-200"
              />
              {/* context */}
              <div className="bg-black text-center">
                <p
                  className="
            text-white">
                  Mern Stack Web Development
                </p>
                <p
                  className="
            text-gray-200">
                  MongoDB React Node
                </p>
              </div>
            </div>
          </motion.div>
          {/* 3 */}
          <motion.div
            ref={ref}
            variants={fadeUp3}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="shadows ">
              <img
                src="mern.jpg"
                alt=""
                className="h-[11rem] border-2 border-blue-200"
              />
              {/* context */}
              <div className="bg-black text-center">
                <p
                  className="
            text-white">
                  Mern Stack Web Development
                </p>
                <p
                  className="
            text-gray-200">
                  MongoDB React Node
                </p>
              </div>
            </div>
          </motion.div>
          {/* 4 */}
        </div>
      </div>
    </section>
  );
}
