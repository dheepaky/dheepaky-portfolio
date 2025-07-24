import { FaCode } from "react-icons/fa6";
const Projectmodel = ({ project, onClose }) => {
  return (
    <section>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center px-4">
        <div className="bg-white rounded-xl max-w-xl w-full relative">
          <img src={project.gif} className="w-full h-70 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black text-white rounded-full w-8 h-8 text-lg flex justify-center items-center hover:bg-red-600">
            &times;
          </button>

          <div className="p-6 text-gray-800">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              <FaCode className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectmodel;
