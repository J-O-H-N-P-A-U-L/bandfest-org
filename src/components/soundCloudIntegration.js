import React, { useEffect, useState } from "react";
import axios from "axios";

const SoundCloudIntegration = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Define your SoundCloud API endpoint
    const apiUrl = "https://api.soundcloud.com/users/Band.fest/tracks?client_id=YOUR_CLIENT_ID";

    // Make an API request to fetch tracks
    axios.get(apiUrl)
      .then((response) => {
        setTracks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SoundCloud tracks:", error);
      });
  }, []);

  return (
    <div>
      <h2>Listen to SoundCloud Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
            <audio controls>
              <source src={track.stream_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoundCloudIntegration;
