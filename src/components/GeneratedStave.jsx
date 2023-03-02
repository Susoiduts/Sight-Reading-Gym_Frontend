import React, { useEffect, useState } from "react";
import ABCJS from "abcjs";
import { abcNoteToMidi } from "../js/abcNoteToMidi";
import Slider from "@mui/material/Slider";

function GeneratedStave({ generatedAbcString }) {
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    ABCJS.renderAbc(
      "excersiseStave",
      generatedAbcString,
      { clickListener: clickListener },
      { selectionColor: "black" }
    );
  }, [generatedAbcString, volume]);

  const handleVolumeChange = (event, newValue) => {

    setVolume(newValue);
  };

  function clickListener(abcelem) {
    let lastClicked = abcelem;
    if (!lastClicked) return;

    //convert abc notation to midi pitch
    let pitch = abcNoteToMidi(lastClicked.pitches[0].name);

    //set duration

    let duration = 0.4;
    let newVolume = Math.ceil(volume * 250);


    // play a note
    ABCJS.synth
      .playEvent([
        { pitch: pitch, volume: newVolume, duration: duration, instrument: 0 },
      ])
      .then(function (response) {
        console.log("note played");
      })
      .catch(function (error) {
        console.log("error playing note", error);
      });
  }


  return (
    <>
      <div id="excersiseStave"></div>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        min={0}
        max={1}
        step={0.01}
        aria-label="Volume"
        sx={{ width: "200px" }} // set custom width
      />
    </>
  );
}

export default GeneratedStave;
