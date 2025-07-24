export default function Certification() {
  return (
    <section>
      <div className="md:flex  flex-col items-center py-10 ">
        <h2 className="text-2xl font-bold mb-4 font-head text-center py-10">
          Certification & Activities
        </h2>
        <div className="flex md:flex-row flex-col flex-wrap items-center  gap-10">
          {/* 1 */}
          <div className="w-[20rem] shadows border-2 ">
            <div className="bg-blue-900 ">
              <img
                src="edu/cisco.png"
                alt=""
                className="w-32 h-20 mx-auto bg-blue-900"
              />

              <div className="flex bg-gray-200 py-3">
                <h1 className=" font-bold text-main ">
                  Completed Cybersecurity course by Cisco Networking Academy
                </h1>
                <p className="text-sm  text-gray-700 mt-2 md:mr-2 md:text-right">
                  2024
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[20rem] shadows border-2">
            <div className="bg-white">
              <img src="edu/ict.jpg" alt="" className="w-32 h-20 mx-auto " />

              <div className="flex bg-gray-200 py-3">
                <h1 className=" font-bold text-main ">
                  Participated in Bhaskar D Workshop ICT Academy
                </h1>
                <p className="text-sm  text-gray-700 mt-2 md:mr-2 md:text-right">
                  2022
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}
