import { motion } from "framer-motion";
import "./App.css";
import Education from "./component/Education";
import Header from "./component/Headers";
import Hero from "./component/Hero";

import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ScrollTopButton from "./component/ScrollTopButton";
import Certification from "./component/Certification";

function App() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <Header />
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <Hero />
      </motion.div>

      <Projects />

      <Education />
      <Certification />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
