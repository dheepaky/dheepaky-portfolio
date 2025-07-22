import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

export default function ScrollTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 16000000000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll ">
      {showTopBtn && (
        <button
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
          className="fixed right-6 bottom-14 bg-cyan-600 text-white px-2 py-2 rounded-full shadow-lg hover:bg-cyan-500 opacity-65">
          <IoArrowUpSharp className="w-7 h-7 " />
        </button>
      )}
    </div>
  );
}
