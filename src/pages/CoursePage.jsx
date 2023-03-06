import React, { useEffect, useState } from "react";
import GeneratedStave from "../components/GeneratedStave";
import DroneButton from "../components/DroneButton";
import NextExcerciseButton from "../components/NextExcerciseButton";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function CoursePage({unlockedExercises, setUnlockedExercises, token}) {
  const {id} = useParams(); //TODO: pass as prop
  const selectedKeySignature = "C";
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
      (note, index) => index < id
    );

    //generate exercise string format "X:1\nL:1/1\nM:\nK:${selectedKeySignature}\nV:V:V1 clef=treble\XXXXX|XXXX|XXXX|XXXX|]"
    const generatedAbcString =
      compileAbcStringFromSelectedNotes(selectedNotesArray);

    return generatedAbcString;
  }

  useEffect(() => {
    setAbcString(() => {
      const newString = generateAbcString()
      return newString;
    });
  }, [id]);

  return ( //can I prevent a reload of the whole page / keep the state?
    <>
    {(parseInt(id) <= unlockedExercises) ? (
    <div style={{width: "50%", margin: "0 auto", textAlign: 'center'}}>
      <h1>Master the Majorscale</h1>
      <p>Exercise {id}</p>
      <GeneratedStave generatedAbcString={abcString} />
      <DroneButton />
      <NextExcerciseButton setUnlockedExercises={setUnlockedExercises} id={id} token={token}/>
    </div>) : (<Navigate replace to="/course" />)} 
    </>
  );
  
}

export default CoursePage;
