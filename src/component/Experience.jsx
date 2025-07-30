import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <section id="education" className="mt-56 px-2  ">
      <h2 className="text-2xl font-bold mb-2.5 font-head text-center ">
        Experience
      </h2>
      <div className="relative mx-auto md:max-w-2xl md:px-4 py-14 ">
        {/* Content 1*/}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1RgftFoq8uEc7E62soArjLzox6F1Xu4Rd/view">
            <div className="rounded-2xl bg-gray-200 p-2 shadows">
              <div className="flex md:justify-between ">
                <img
                  src="/edu/gkcreation.png"
                  alt=""
                  className="md:w-14 md:h-14 w-10 h-10 "
                />
                <h1 className="md:text-xl text-[15px] px-2 text-main font-bold text-main ">
                  Mern Stack Internship
                </h1>
                <p className="md:text-sm  text-[12px] text-gray-700 mt-1 md:mt-2 md:mr-5 md:text-right">
                  Jan 2025 – April 2025
                </p>
              </div>
              <h1 className="md:text-xl text-[12px] mr-5 text-gray-700 text-center ">
                GK CREATIONS, Sivakasi.
              </h1>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
