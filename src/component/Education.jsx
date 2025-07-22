import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const fadeUp2 = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const fadeUp3 = {
    hidden: { opacity: 0, x: -340 },
    show: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  return (
    <section id="education" className="mt-56 px-2  ">
      <h2 className="text-2xl font-bold mb-1 font-head text-center ">
        Education
      </h2>
      <div className="relative mx-auto md:max-w-4xl md:px-4 py-7 ">
        {/* Vertical line */}
        <div className="absolute md:left-6.5 left-1 top-0 bottom-0 w-[2px] bg-gray-300 rounded"></div>

        <div className="relative  items-start mb-12 md:pl-12 pl-2">
          {/* Dot */}
          <div className="absolute left-[0.3px] md:left-1 top-1 md:w-4 md:h-4 w-3 h-3 bg-green-500 glow border-2 border-white rounded-full"></div>
          {/* Content 1*/}
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="rounded-2xl bg-gray-200 p-2">
              <div className="flex md:justify-between ">
                <img
                  src="/vhnsnc.png"
                  alt=""
                  className="md:w-14 md:h-14 w-12 h-12 "
                />
                <h1 className="md:text-2xl text-[17px]  font-bold text-main md:mr-56">
                  Master of Computer Applications (MCA)
                </h1>
                <p className="text-sm  text-gray-700 mt-2 md:mr-2 md:text-right">
                  2023 – 2025
                </p>
              </div>
              <div className="flex md:justify-between md:mb-10">
                <p className="text-gray-700 md:ml-20 text-center ml-5">
                  V.H.N.S.N. College, Virudhunagar
                </p>
                <p className="text-green-500 font-bold text-center p-1 px-4 ml-2 md:ml-20  bg-green-100 rounded-2xl shadow-emerald-500 ">
                  Grade: 76%
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2 */}
      </div>

      <div className="relative mx-auto md:max-w-4xl md:px-4 py-4">
        {/* Vertical line */}
        <div className="absolute md:left-6.5 left-1 top-0 bottom-0 w-[2px] bg-gray-300 rounded"></div>

        <div className="relative  items-start mb-12 md:pl-12 pl-2">
          {/* Dot */}
          <div className="absolute left-[0.3px] md:left-1 top-1 md:w-4 md:h-4 w-3 h-3 bg-green-500 glow border-2 border-white rounded-full"></div>
          <motion.div
            ref={ref}
            variants={fadeUp2}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            {/* Content 1*/}
            <div className="rounded-2xl bg-gray-200 p-2">
              <div className="flex md:justify-between ">
                <img
                  src="/kaliswari.png"
                  alt=""
                  className="md:w-14 md:h-14 w-12 h-12 "
                />
                <h1 className="md:text-2xl text-[17px]  font-bold text-main md:mr-56">
                  Bachelor of Computer Applications (BCA)
                </h1>
                <p className="text-sm  text-gray-700 mt-2 md:mr-2 md:text-right">
                  2020 – 2023
                </p>
              </div>
              <div className="flex md:justify-between md:mb-10">
                <p className="text-gray-700 md:ml-20 text-center ml-5">
                  Sri Kaliswari College, Sivakasi
                </p>
                <p className="text-green-500 font-bold text-center p-1 ml-3 px-5 md:ml-20  bg-green-100 rounded-2xl shadow-emerald-500 ">
                  Grade: 70%
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2 */}
      </div>

      <h2 className="text-2xl font-bold mb-4 font-head text-center py-7">
        Languages & Tools
      </h2>
      <motion.div
        ref={ref}
        variants={fadeUp3}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}>
        <div className="flex flex-wrap ml-4 gap-4 md:gap-6 py-5 justify-center mx-auto">
          <img
            src="https://skillicons.dev/icons?i=html"
            alt="HTML"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=css"
            alt="CSS"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=js"
            alt="JavaScript"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="Tailwind CSS"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=py"
            alt="Python"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=react"
            alt="React"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=nodejs"
            alt="Node.js"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=express"
            alt="Express"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=mongodb"
            alt="MongoDB"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=docker"
            alt="Docker"
            className="w-12 h-12"
          />
          <img
            src="https://skillicons.dev/icons?i=php"
            alt="PHP"
            className="w-12 h-12"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            className="w-12 h-12"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
            alt="Blender"
            className="w-12 h-12"
          />
        </div>
      </motion.div>
    </section>
  );
}
