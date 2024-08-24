import React, { useRef } from "react";
import { CircleX, AudioLines } from "lucide-react";

function Popup({ onClose }) {
  const bgRef = useRef();

  const closePopUp = (e) => {
    if (bgRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={bgRef}
      onClick={closePopUp}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <CircleX size={30} />
        </button>
        <div className="bg-indigo-500 rounded-xl p-20 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">
            This App is Under development!!!
          </h1>
          <p className="text-3xl font-bold max-w-md text-center text-yellow-200">
            Try useing the search bar to search for your favorite songs.
          </p>
          <form>
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full flex items-center justify-center gap-3 px-5 py-3 font-medium rounded-md bg-black">
              <AudioLines />
              Sign Up for Updates
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
