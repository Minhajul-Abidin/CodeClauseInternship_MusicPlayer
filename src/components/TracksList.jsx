import React from "react";

const tracksData = {
  items: [
    {
      album: {
        name: "Dopamine",
        release_date: "2015-10-16",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b273cc2cf912462d8ae4ef856434",
          },
        ],
      },
      name: "Electric Love",
      artists: [{ name: "BØRNS" }],
      external_urls: {
        spotify: "https://open.spotify.com/track/2GiJYvgVaD2HtM8GqD9EgQ",
      },
      popularity: 79,
      duration_ms: 218106,
    },
    {
      album: {
        name: "Oracular Spectacular",
        release_date: "2007-12-14",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb",
          },
        ],
      },
      name: "Electric Feel",
      artists: [{ name: "MGMT" }],
      external_urls: {
        spotify: "https://open.spotify.com/track/3FtYbEfBqAlGO46NUDQSAt",
      },
      popularity: 81,
      duration_ms: 229640,
    },
    {
      album: {
        name: "Baylor Swift",
        release_date: "2018-05-08",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b2734c806e44d7e45bb7a0995f0e",
          },
        ],
      },
      name: "Electrical",
      artists: [{ name: "Bali Baby" }],
      external_urls: {
        spotify: "https://open.spotify.com/track/58nSc49D656Rq4dEqFYkMm",
      },
      popularity: 57,
      duration_ms: 237563,
    },
  ],
};

function TrackList() {
  return (
    <div>
      {tracksData.items.map((track, index) => (
        <div key={index} className="track-item">
          <img
            src={track.album.images[0].url}
            alt={track.album.name}
            style={{ width: "100px" }}
          />
          <h3>{track.name}</h3>
          <p>Artist: {track.artists[0].name}</p>
          <p>
            Album: {track.album.name} ({track.album.release_date})
          </p>
          <p>Popularity: {track.popularity}</p>
          <p>Duration: {(track.duration_ms / 1000).toFixed(2)} seconds</p>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen on Spotify
          </a>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
