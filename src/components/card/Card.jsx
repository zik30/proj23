import React, { useState } from "react";
import stl from "./card.module.scss";

function Card({ name, phrase, url, mp }) {
  const [clicked, setClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      mp.pause();
    } else {
      mp.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className={stl.card}>
        <h3>{name}</h3>
        <hr />
        <button
          onClick={() => {
            setClicked(true), togglePlay();
          }}
        >
          OPEN
        </button>
      </div>

      {clicked && (
        <div className={stl.modaloverlay}>
          <div className={stl.modal}>
            <h3>{name}</h3>
            <button
              onClick={() => {
                setClicked(false), togglePlay();
              }}
            >
              x
            </button>
            <hr />
            <img src={url} alt="student photo" />
            <hr />
            <audio controls autoPlay>
              <source src={mp} type="audio/mpeg" />
            </audio>
            <p>{phrase}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
