import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
export default function Contact() {
  return (
    <section id="contact" className="border-separate border-amber-400">
      <hr className="border-t border-gray-300 my-8" />
      <div className=" py-10 text-center w-full">
        <h1 className="font-head font-bold">Get In Touch</h1>
        <p className="py-5 text-[18px] font-light">
          Open to collaborations, conversations, and creative possibilities -
          feel free to reach out to start a conversation
        </p>
        <a
          href="mailto:deepakk300712@gmail.com"
          className="flex justify-center py-2 gap-2 underline font-semibold">
          <MdOutlineEmail className="w-5 h-5" />
          deepakk300712@gmail.com
        </a>
        <a
          href="tel:+918838551405"
          className="flex justify-center py-3 gap-2 underline font-semibold">
          <MdLocalPhone className="w-5 h-5" />
          +918838551405
        </a>
        <div className=" flex justify-center gap-2 py-2">
          <a href="https://www.linkedin.com/in/dheepaky">
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a href="https://github.com/dheepaky">
            <FaSquareGithub className="w-7 h-7" />
          </a>
          <a href="mailto:deepakk300712@gmail.com">
            <MdOutlineMail className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
