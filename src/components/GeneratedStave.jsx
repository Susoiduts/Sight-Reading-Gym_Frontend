import React from "react";
import ABCJS from "abcjs";
import { useEffect } from "react";

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
    console.log(lastClicked);

    //convert abc notation to midi pitch
    let pitch = lastClicked.abselem.pitch;

    // play a 'C' note
    ABCJS.synth
      .playEvent([{ pitch: 21, volume: 105, duration: 0.125, instrument: 0 }])
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
