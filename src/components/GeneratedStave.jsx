import React from "react";
import ABCJS from "abcjs";
import { useEffect } from "react";
import { abcNoteToMidi } from "../js/abcNoteToMidi";

function GeneratedStave({ generatedAbcString }) {
  //TODO: needs to be initialised after user interaction
  var synth = new ABCJS.synth.CreateSynth();

  useEffect(() => {
    ABCJS.renderAbc(
      "excersiseStave",
      generatedAbcString,
      { clickListener: clickListener },
      { selectionColor: "black" }
    );
  }, [generatedAbcString]);

  function clickListener(abcelem) {
    let lastClicked = abcelem;
    if (!lastClicked) return;

    //convert abc notation to midi pitch
    let pitch = abcNoteToMidi(lastClicked.pitches[0].name);

    //set duration
    let duration = lastClicked.duration;

    // play a 'C' note
    ABCJS.synth
      .playEvent([
        { pitch: pitch, volume: 105, duration: duration, instrument: 0 },
      ])
      .then(function (response) {
        console.log("note played");
      })
      .catch(function (error) {
        console.log("error playing note", error);
      });
    if (!lastClicked) return;
  }
  return (
    <>
      {/* <div>{generatedAbcString}</div> */}
      <div id="excersiseStave"></div>
    </>
  );
}

export default GeneratedStave;
