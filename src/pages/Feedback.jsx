import React, { useEffect, useState } from "react";
import ABCJS from "abcjs";
import { abcNoteToMidi } from "../js/abcNoteToMidi";
import Slider from "@mui/material/Slider";
import GeneratedStave from "../components/GeneratedStave";
import DroneButton from "../components/DroneButton";
import NextExcerciseButton from "../components/NextExcerciseButton";

function Feedback() {
  const courseID = 2; //TODO: pass as prop
  const selectedKeySignature = "C";
  const scaleTones = ["C", "D", "E", "F", "G", "A", "B", "c"];
  const [abcString, setAbcString] = useState("");

  function compileAbcStringFromSelectedNotes(selectedNotesArray) {
    let abcString = `X:1\nM:4/4\nL:1/4\nK:${selectedKeySignature}\n`;
    let notationToBeAdded = "";

    // create notationto be added for two bars
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
    const tonematerialString = "CDEFGABc";

    //split abcString into array of single note strings
    const abcStringArray = tonematerialString.split(/(?=[A-G]),?|(?=[a-g])'?/);

    //reduce array to notes necessary for excersice
    const selectedNotesArray = abcStringArray.filter(
      (note, index) => index < courseID
    );

    //generate exercise string format "X:1\nL:1/1\nM:\nK:${selectedKeySignature}\nV:V:V1 clef=treble\XXXXX|XXXX|XXXX|XXXX|]"
    const generatedAbcString =
      compileAbcStringFromSelectedNotes(selectedNotesArray);

    return generatedAbcString;
  }

  useEffect(() => {
    setAbcString(() => {
      const newString = generateAbcString()
      console.log(newString);
      return newString;
    });
  }, []);

  return (
    <div style={{width: "50%", margin: "0 auto", textAlign: 'center'}}>
      <h1>Master the Majorscale</h1>
      <p>Exercise {courseID}</p>
      <GeneratedStave generatedAbcString={abcString} />
      <DroneButton />
      <NextExcerciseButton />
    </div>
  );
}

export default Feedback;
