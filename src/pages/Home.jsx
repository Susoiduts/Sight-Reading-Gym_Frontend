import React, {useState} from 'react';
import GeneratedStave from '../components/GeneratedStave';
import StaveConfigurator from '../components/StaveConfigurator';

function Home() {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [generatedAbcString, setGeneratedAbcString] = useState('');

  return (
    <div>
      <h1>Welcome to the Sight-Sing-Gym</h1>
      <StaveConfigurator setGeneratedAbcString={setGeneratedAbcString}/>
      <GeneratedStave generatedAbcString={generatedAbcString}/>
    </div>
  );
}

export default Home;
