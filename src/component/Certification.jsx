import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Certification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const fadeUp2 = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const fadeUp3 = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section>
      <div className="md:flex  flex-col items-center py-24 ">
        <h2 className="text-2xl font-bold mb-4 font-head text-center py-10">
          Certification
        </h2>
        <div className="flex md:flex-row flex-col flex-wrap  items-center  gap-10">
          {/* 1 */}
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="w-[20rem] shadows border-2 scrollreveal">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://simpli.app.link/DSdnBXqcqVb">
                <div className="bg-blue-900 ">
                  <img
                    src="edu/simplilearn.png"
                    alt=""
                    className=" mx-auto bg-blue-900"
                  />

                  <div className="flex bg-gray-200 py-3">
                    <h1 className=" font-bold text-main ">
                      Completed Introduction to FrontEnd Development by
                      Simplilearn
                    </h1>
                    <p className="text-sm  text-gray-700 mt-7 md:mr-2 md:text-right">
                      2025
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/*  */}

          {/* 2 */}
          <motion.div
            ref={ref}
            variants={fadeUp2}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="w-[20rem] shadows border-2 scrollreveal">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://simpli.app.link/2ySSryDcqVb">
                <div className="bg-blue-900 ">
                  <img
                    src="edu/simplilearn.png"
                    alt=""
                    className=" mx-auto bg-blue-900"
                  />

                  <div className="flex bg-gray-200 py-3">
                    <h1 className=" font-bold text-main w-70">
                      Completed JavaScript For Beginners by Simplilearn
                    </h1>
                    <p className="text-sm  text-gray-700 mt-7 md:mr-2 md:text-right">
                      2025
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
          {/*  */}

          {/* 3 */}
          <motion.div
            ref={ref}
            variants={fadeUp3}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <div className="w-[20rem] shadows border-2 scrollreveal">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ReOII2xVeEizjmD3XXUTK02qFaxMnxqs/view">
                <div className="bg-blue-900 ">
                  <img
                    src="edu/cisco.png"
                    alt=""
                    className=" mx-auto bg-blue-900"
                  />

                  <div className="flex bg-gray-200 py-3">
                    <h1 className=" font-bold text-main w-70">
                      Completed Cybersecurity course by Cisco Networking Academy
                    </h1>
                    <p className="text-sm  text-gray-700 mt-7 md:mr-2 md:text-right">
                      2022
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </section>
  );
}
