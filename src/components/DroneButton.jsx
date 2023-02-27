import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

function DroneButton() {
  const [buttonText, setButtonText] = useState("Play Drone");
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.22);

  const handleButtonClick = () => {
    let audio = audioRef.current;
    if (audio.paused) {
      audio.loop = true; // enable infinite loop
      audio.volume = volume;
      audio.play();
      setButtonText("Pause Drone");
    } else {
      audio.pause();
      setButtonText("Play Drone");
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    let audio = audioRef.current;
    audio.volume = newValue;
  };

  return (
    <>
      <Button variant="contained" onClick={handleButtonClick}>
        {buttonText}
      </Button>
      <audio id="selectedDrone" ref={audioRef} src="/audio/C.mp3"></audio>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        min={0}
        max={1}
        step={0.01}
        aria-label="Volume"
      />
    </>
  );
}

export default DroneButton;
