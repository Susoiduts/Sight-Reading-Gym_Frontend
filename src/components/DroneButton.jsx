import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

function DroneButton() {
  const [buttonText, setButtonText] = useState("Play Drone");
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  const handleButtonClick = () => {
    let audio = audioRef.current;
    if (audio.paused) {
      audio.loop = true; // enable infinite loop
      audio.volume = volume/2;
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
    <div style={{display: "flex", flexDirection: "column", alignElements: "center", justifyContent: "center"}}>
      <Button style={{margin: "auto"}} variant="contained" onClick={handleButtonClick}>
        {buttonText}
      </Button>
      <audio id="selectedDrone" ref={audioRef} src="/audio/C.mp3"></audio>
      <Slider
        style={{margin: "auto"}}
        value={volume}
        onChange={handleVolumeChange}
        min={0}
        max={1}
        step={0.01}
        aria-label="Volume"
        sx={{ width: "200px" }} // set custom width
      />
    </div>
  );
}

export default DroneButton;
