import React, { useState, useRef } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    // Fetch data from the Spotify API
    let data = await fetch(
      `https://v1.nocodeapi.com/adam3301/spotify/CYNUfXqFQKJsWMiG/search?q=${keyword}&type=track`
    );

    let tracksData = await data.json();
    console.log(tracksData.tracks.items);

    setTracks(tracksData.tracks.items);
  };

  // State to store the currently playing audio

  const [playingAudio, setPlayingAudio] = useState(null); // Track currently playing audio
  const audioRefs = useRef({}); // Ref object to store audio element references

  const handlePlay = (id) => {
    // Stop currently playing audio if it exists and it's different from the one being clicked
    if (playingAudio && playingAudio !== id) {
      audioRefs.current[playingAudio]?.pause();
      audioRefs.current[playingAudio].currentTime = 0;
    }

    // Update the state with the new playing audio
    if (audioRefs.current[id]) {
      audioRefs.current[id].play();
    }

    setPlayingAudio(id);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-blue-800 font-bold font-serif">
            YourMusic
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
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
                <img src="https://w7.pngwing.com/pngs/981/563/png-transparent-person-pinterest-profile-user-pinterest-ui-icon.png" />
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

      {/* Cards */}

      <div class="flex items-center justify-center min-h-screen container mx-auto">
        <div className="cards columns-1 md:columns-2 lg:columns-3 xl:columns-4 p-4 gap-4 space-y-4">
          {tracks.map((element) => {
            return (
              <div
                key={element.id}
                class="main-card rounded-xl shadow-lg border-solid border-2 border-gray-300 break-inside-avoid"
              >
                <div class="p-5 flex flex-col">
                  <div class="rounded-xl overflow-hidden">
                    <img src={element.album.images[1].url} alt="" />
                  </div>
                  <h5 class="text-2xl font-medium mt-3 text-slate-800">
                    {element.name}
                  </h5>
                  <audio
                    ref={(ref) => (audioRefs.current[element.id] = ref)}
                    className="mt-3"
                    src={element.preview_url}
                    onPlay={() => handlePlay(element.id)}
                    controls
                  ></audio>
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
