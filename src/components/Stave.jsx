import ABCJS from "abcjs";
import React, { useEffect, useState } from "react";

function Stave() {
  const [diselectedNotes, setDiselectedNotes] = useState([]);

  const testArray = [1, 2];

  let keySignature = "C";
  let abcString =
    "X:1\nL:1/1\nM:\nK:C\nV:V:V1 clef=treble\nG,A,B,CDEFGABcdefgabc'";
  //   let abcString =`X:1\nK:${keySignature}\nDD AA|BBA2|\n`;
  function clickListener(
    abcelem,
    tuneNumber,
    classes,
    analysis,
    drag,
    mouseEvent
  ) {
    changeNoteColor(testArray);
    handleNoteDiselection(abcelem.abselem.counters.note);
  }

  function handleNoteDiselection(position) {
    setDiselectedNotes((prev) => {
      if (prev.includes(position)) {
        // If the note is already in the array, remove it
        return prev.filter((ele) => ele !== position);
      } else {
        // If the note is not in the array, add it
        return [...prev, position];
      }
    });
  }

  function changeNoteColor(notesArray) {
    const staveElement = document.getElementById('paper').firstChild.g;
    notesArray.forEach((note) => {
      const noteClass = `abcjs-n${note}`;
      console.log(staveElement.g.noteClass.style)
      staveElement.noteClass.style.fill = 'red';
  });
  }

  useEffect(() => {
      ABCJS.renderAbc(
        "paper",
        abcString,
        { clickListener: clickListener },
        { add_classes: true },
        { selectionColor: "black" }
    );
  }, [abcString, diselectedNotes]);

  return (
    <>
      <p>Selected Key: {keySignature}</p>
      <div id="paper">Stave</div>
      <div>{diselectedNotes}</div>
    </>
  );
}

export default Stave;
