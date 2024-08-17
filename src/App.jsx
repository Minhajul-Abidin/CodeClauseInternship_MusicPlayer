import React from "react";
import { useState } from "react";

function App() {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    // Fetch data from the Spotify API
    let data = await fetch(
      "https://v1.nocodeapi.com/adam3301/spotify/CYNUfXqFQKJsWMiG/search?q=Ambient&type=track"
    );

    let tracksData = await data.json();
    console.log(tracksData.tracks.items);

    setTracks(tracksData.tracks.items);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div>
            <button onClick={getTracks} className="btn">
              Search
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="cards columns-1 md:columns-2 lg:columns-3 xl:columns-4 p-4 gap-4 space-y-4 items-center">
          {tracks.map((element) => {
            return (
              <div
                key={element.id}
                className="main-card rounded-xl shadow-lg border-solid border-2 border-gray-300 break-inside-avoid"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={element.album.images[1].url}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{element.name}</h2>
                  <p>xyz</p>
                  <div className="card-actions">
                    <audio src={element.preview_url} controls></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
