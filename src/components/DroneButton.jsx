import React from "react";
import Button from "@mui/material/Button";

function DroneButton() {
  const handleButtonClick = () => {
    let audio = document.getElementById("myAudio");
    audio.play();
  };

  const handleAudioError = () => {
    console.log("Error loading audio file");
  };

  const handleAudioEnd = () => {
    console.log("Audio playback ended");
  };

  return (
    <>
      <Button variant="contained" onClick={handleButtonClick}>
        Play Drone
      </Button>
      <audio id="myAudio" onError={handleAudioError} onEnded={handleAudioEnd}>
        <source src="../audio/C.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default DroneButton;


