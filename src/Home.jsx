import { useNavigate } from "react-router-dom";
import arrow from './assets/arrow-right.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className='flex justify-around items-around h-[85vh] bg-[#FEFAFA]'>
      <div className='flex flex-col justify-start w-[35vw] h-[70vh] mt-[5vh]'>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <img style={{ height: "192px", width: "100%", objectFit: "contain" }} src="/DB.png" alt="Logo" />
          </div>
          <div className="flex flex-col justify-start gap-4 p-4">
            <p className='text-xl font-semibold'>Daten und Schemata</p>
            <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => navigate("/upload")}
            >
              Daten hochladen
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start w-[35vw] h-[70vh] mt-[5vh]'>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <img style={{ height: "192px", width: "100%", objectFit: "contain" }} src="/Metabase.png" alt="Logo" />
          </div>
          <div className="flex flex-col justify-start gap-4 p-4">
            <p className='text-xl font-semibold'>Metabase</p>
            <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => window.location.href = import.meta.env.VITE_METABASE_ENDPOINT}
            >
              <div className="flex items-center justify-center g-3">
                Metabase
                <img src={arrow} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;