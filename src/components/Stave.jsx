import ABCJS from "abcjs";
import React, { useEffect, useState } from "react";

function Stave() {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [notePosition, setNotePosition] = useState(null);
  let noteElement = document.querySelector(`#paper .abcjs-n${notePosition}`);
  console.log(noteElement)

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
    setNotePosition(abcelem.abselem.counters.note);
    handleNoteDiselection(abcelem.abselem.counters.note);
  }

  function handleNoteDiselection(notePosition) {
    setDiselectedNotes((prev) => {
      if (prev.includes(notePosition)) {
        // If the note is already in the array, remove it
        const newArray = prev.filter((ele) => ele !== notePosition);
        changeNoteColor(notePosition, 'black');
        return newArray;
      } else {
        // If the note is not in the array, add it
        const newArray = [...prev, notePosition];
        changeNoteColor(notePosition, 'red');
        return newArray;
      }
    });
  }

  function changeNoteColor(notePosition, color) {
    noteElement = document.querySelector(
      `#paper .abcjs-n${notePosition}`
    );
    console.log(noteElement);
    noteElement.style.fill = color;
    //noteElement.style.fill= 'red';
    //noteElement.style.fill === 'red'? noteElement.style.fill = 'black' : noteElement.style.fill = 'red';
  }
  console.log(notePosition);
  console.log(noteElement? noteElement.style.fill : 'no note');

  useEffect(() => {
    ABCJS.renderAbc(
      "paper",
      abcString,
      { clickListener: clickListener },
      { add_classes: true },
      { selectionColor: "black" }
    );
  }, [abcString]);

  return (
    <>
      <p>Selected Key: {keySignature}</p>
      <div id="paper">Stave</div>
      <div>{diselectedNotes}</div>
    </>
  );
}

export default Stave;
