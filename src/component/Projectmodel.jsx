const Projectmodel = ({ onClose }) => {
  return (
    <section>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center px-4">
        <div className="bg-white rounded-xl max-w-xl w-full  relative">
          {/* Close button */}

          {/* Content */}
          <video
            src="Ecommerce.mp4"
            alt="preview"
            autoPlay="true"
            disablePictureInPicture="true"
            loop="true"
            className="w-full h-70 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 cursor-pointer right-3 bg-black text-white rounded-full w-8 h-8 text-lg flex justify-center items-center hover:bg-red-600">
            &times;
          </button>

          <div className="p-6 text-gray-800">
            <h3 className="text-xl font-bold">Quinvest Dashboard</h3>
            <p className="text-sm text-gray-500 mb-2">Jan 2024 - Feb 2024</p>
            <p className="text-sm mb-4">
              Quinvest pioneers data-driven investment strategies, providing
              investors with powerful tools to maximize returns in today’s
              dynamic financial markets.
            </p>
            <a
              href="https://your-project-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Experience Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectmodel;
