import React, {useState} from 'react';
import GeneratedStave from '../components/GeneratedStave';
import StaveConfigurator from '../components/StaveConfigurator';

function Home() {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [generatedAbcString, setGeneratedAbcString] = useState("X:1\nM:4/4\nL:1/4\nK:C\nG,A,B,CDEFGABcdefgabc'");

  return (
    <div>
      <h1>Welcome to the Sight-Sing-Gym</h1>
      <StaveConfigurator setGeneratedAbcString={setGeneratedAbcString}/>
      <GeneratedStave generatedAbcString={generatedAbcString}/>
    </div>
  );
}

export default Home;
