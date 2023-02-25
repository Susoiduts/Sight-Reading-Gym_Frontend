import React, { useEffect } from "react";
import Button from "@mui/material/Button";

function GenerateButton({
  selectedKeySignature,
  abcStringConfigurator,
  setGeneratedAbcString,
  diselectedNotes,
}) {
  const handleButtonClick = () => {
    const generatedAbcString = generateAbcString();
    setGeneratedAbcString(generatedAbcString);
  };

  function compileAbcStringFromSelectedNotes(selectedNotesArray) {
    let abcString = `X:1\nM:4/4\nL:1/4\nK:${selectedKeySignature}\n`;
    let notationToBeAdded = "";

    // create notationto be added for four bars
    for (let i = 0; i < 4; i++) {
      // create and adding 4 random notes and a barline
      for (let j = 0; j < 4; j++) {
        let randomNote =
          selectedNotesArray[
            Math.floor(Math.random() * selectedNotesArray.length)
          ];
        notationToBeAdded += randomNote;
      }
      notationToBeAdded += "|";
    }
    notationToBeAdded += "]";
    abcString += notationToBeAdded;
    return abcString;
  }

  function generateAbcString() {
    //reduce abcStringConfigurator to tonmaterial of key
    const tonematerialString = abcStringConfigurator.split("clef=treble\n")[1];

    //split abcString into array of single note strings
    const abcStringArray = tonematerialString.split(/(?=[A-G]),?|(?=[a-g])'?/);

    //remove diselected notes from array
    const selectedNotesArray = abcStringArray.filter(
      (note, index) => !diselectedNotes.includes(index)
    );

    //generate exercise string format "X:1\nL:1/1\nM:\nK:${selectedKeySignature}\nV:V:V1 clef=treble\XXXXX|XXXX|XXXX|XXXX|]"
    const generatedAbcString =
      compileAbcStringFromSelectedNotes(selectedNotesArray);

    return generatedAbcString;
  }
  useEffect(() => {
    handleButtonClick();
  }, []);

  return (
    <Button variant="contained" onClick={handleButtonClick}>
      Generate Exercise
    </Button>
  );
}

export default GenerateButton;
