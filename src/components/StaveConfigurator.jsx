import ABCJS from "abcjs";
import React, { useEffect, useState } from "react";
import GenerateButton from "./GenerateButton";
import { Select, MenuItem } from "@mui/material";
import { computeAbcStringConfigurator } from "../js/computeAbcStringConfigurator";
import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";

function StaveConfigurator({
  setGeneratedAbcString,
  selectedKeySignature,
  setSelectedKeySignature,
}) {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [abcStringConfigurator, setAbcStringConfigurator] = useState(
    `X:1\nL:1/1\nM:\nK:${selectedKeySignature}\nV:V:V1 clef=treble\nG,A,B,CDEFGABcdefgabc'`
  );
  const [chromatic, setChromatic] = useState(false);

  useEffect(() => {
    const computedAbcStringConfigurator = computeAbcStringConfigurator(
      chromatic,
      selectedKeySignature
    );
    setAbcStringConfigurator(computedAbcStringConfigurator);
    ABCJS.renderAbc(
      "selectionStave",
      computedAbcStringConfigurator,
      { clickListener: clickListener },
      { add_classes: true },
      { selectionColor: "black" }
    );
  }, [selectedKeySignature, chromatic]);

  // handle note selection
  function clickListener(abcelem) {
    handleNoteDiselection(abcelem.abselem.counters.note);
  }

  //diselect all notes
  function handleDeselectAll() {
    //get tonematerial from abcStringConfigurator
    const tonematerial = abcStringConfigurator.split("clef=treble\n")[1];
    //count notes in tonematerial
    const regex=/[_=^]*[A-Za-z][,']*/g;
    const numberOfNotes = tonematerial.match(regex).length;
    //diselect all notes
    for (let i = 0; i < numberOfNotes; i++) {
      setDiselectedNotes((prev) => {
        if (prev.includes(i)) {
          // If the note is already in the array, return oldarray
          return prev;
        } else {
          // If the note is not in the array, add it
          const newArray = [...prev, i];
          changeNoteColor(i, 0.4);
          return newArray;
        }
      });
    }
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

  function handleChange(event) {
    setSelectedKeySignature(event.target.value);
    setDiselectedNotes([]);
  }

  return (
    <>
      <div>
        Select a key:{" "}
        <Select
          label="Keysignature"
          value={selectedKeySignature}
          onChange={handleChange}
        >
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"Db"}>Db</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"Eb"}>Eb</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
          <MenuItem value={"F"}>F</MenuItem>
          <MenuItem value={"F#"}>F#/Gb</MenuItem>
          <MenuItem value={"G"}>G</MenuItem>
          <MenuItem value={"Ab"}>Ab</MenuItem>
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"Bb"}>Bb</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
        </Select>
      </div>
      <ToggleButton
        value="check"
        selected={chromatic}
        onChange={() => {
          setChromatic(!chromatic);
        }}
      >
        chromatic
      </ToggleButton>
      <p>Select/Diselect notes by clicking on them in the stave below</p>
      <Button variant="outlined" size="medium" onClick={handleDeselectAll}>
        diselect all notes
      </Button>
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
