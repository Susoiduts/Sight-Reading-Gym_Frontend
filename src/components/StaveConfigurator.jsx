import ABCJS from "abcjs";
import React, { useEffect, useState } from "react";
import GenerateButton from "./GenerateButton";

function StaveConfigurator({ setGeneratedAbcString }) {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [selectedKeySignature, setSelectedKeySignature] = "C";
  const [abcStringConfigurator, setAbcStringConfigurator] = useState(
    `X:1\nL:1/1\nM:\nK:C\nV:V:V1 clef=treble\nG,A,B,CDEFGABcdefgabc'`
  );

  useEffect(() => {
    ABCJS.renderAbc(
      "selectionStave",
      abcStringConfigurator,
      { clickListener: clickListener },
      { add_classes: true },
      { selectionColor: "black" }
    );
  }, [abcStringConfigurator]);

  // handle key selection
  function handleKeySelection() {}

  function adjustAbcStringConfigurator() {}

  // handle note selection
  function clickListener(abcelem) {
    handleNoteDiselection(abcelem.abselem.counters.note);
  }

  function handleNoteDiselection(notePosition) {
    setDiselectedNotes((prev) => {
      if (prev.includes(notePosition)) {
        // If the note is already in the array, remove it
        const newArray = prev.filter((ele) => ele !== notePosition);
        changeNoteColor(notePosition, 1);
        return newArray;
      } else {
        // If the note is not in the array, add it
        const newArray = [...prev, notePosition];
        changeNoteColor(notePosition, 0.4);
        return newArray;
      }
    });
  }

  function changeNoteColor(notePosition, color) {
    let noteElement = document.querySelector(
      `#selectionStave .abcjs-n${notePosition}`
    );
    noteElement.style.opacity = color;
  }

  return (
    <>
      <p>Selected Key: {selectedKeySignature}</p>
      <p>Select/Diselect notes by clicking on them in the Configurator below</p>
      <div id="selectionStave">Stave</div>
      <GenerateButton
        selectedKeySignature={selectedKeySignature}
        abcStringConfigurator={abcStringConfigurator}
        setGeneratedAbcString={setGeneratedAbcString}
        diselectedNotes={diselectedNotes}
      />

    </>
  );
}

export default StaveConfigurator;
