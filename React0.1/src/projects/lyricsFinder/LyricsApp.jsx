import React from "react";
import axios from "axios";

const LyricsApp = () => {
  const [artist, setArtist] = React.useState("");
  const [song, setSong] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetchLyrics = async () => {
    setLoading(true);
    setError("");
    const options = {
      method: "GET",
      url: "https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect",
      params: {
        artist: artist,
        song: song,
      },
      headers: {
        "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
      },
    };
    try {
      // const res = await axios.get('https://api.lyrics.ovh/v1/' + artist + '/' + song);
    //   const res = await axios.get(
    //     `https://allorigins.win/api.lyrics.ovh/v1/${artist}/${song}`
    //   );
      const res = await axios.request(options);
      console.log(res.data);
      setLyrics(res.data.lyrics);
    } catch (error) {
      setError("Error fetching lyrics");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(lyrics);

  return (
    <div>
      {/* <h1>Lyrics Finder</h1> */}
      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Song Name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <button onClick={fetchLyrics}>Get Lyrics</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}
    </div>
  );
};

export default LyricsApp;
