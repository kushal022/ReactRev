import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { set } from "react-hook-form";

const MemesApp = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [randomImage, setRandomImage] = useState();
  const [text, setText] = useState({ top: "", bottom: "" });

  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllImages(data.data.memes);
      //   console.log(data.data.memes);
    };
    fetchMemes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * allImages.length);
    setRandomImage(allImages[randomIndex]);
    setText({ top: topText, bottom: bottomText });
    setTopText("");
    setBottomText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form style={{ display: "inline-block" }} action="" onSubmit={handleSubmit}>
        <input style={{ width: "300px", margin: "10px" }}
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Top Text"
        />
        <input style={{ width: "300px", margin: "10px" }}
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Bottom Text"
        />
        <button style={{ margin: "10px" }}>Generate</button>
      </form>
      {randomImage && (
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            margin: "20px auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              width: "300px",
              border: "2px solid black",
              position: "relative",
            }}
          >
            <img
              src={randomImage.url}
              alt="memes"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </div>
          <h2
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {text.top&& text.top}
          </h2>
          <h2
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {text.bottom&& text.bottom}
          </h2>
        </div>
      )}
    </div>
  );
};

export default MemesApp;
