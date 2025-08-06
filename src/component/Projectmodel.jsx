import { FaCode } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
const Projectmodel = ({ project, onClose }) => {
  return (
    <section>
      {/* bg-black bg-opacity-20 backdrop-blur-sm  */}
      <div className="fixed inset-0 z-50 bg-gray-300 opacity-[0.9] flex justify-center items-center px-4">
        <div className="bg-white rounded-xl max-w-xl  w-full relative">
          <img src={project.gif} className="object-cover " />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black text-white rounded-full w-8 h-8 text-lg flex justify-center items-center hover:bg-red-600">
            &times;
          </button>

          <div className="p-6 text-gray-800">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-green-400 px-4 py-0.5 md:px-5 md:py-1 rounded-md hover:bg-gray-800 transition">
                <FaCode className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-black text-green-400 px-4 py-0.5 md:px-5 md:py-1 rounded-md hover:bg-gray-800 transition">
                <GrView className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectmodel;
