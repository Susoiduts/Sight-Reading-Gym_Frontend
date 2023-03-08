import React, { useEffect, useState } from "react";
import DroneButton from "../components/DroneButton";
import GeneratedStave from "../components/GeneratedStave";
import StaveConfigurator from "../components/StaveConfigurator";


function Home() {
  const [diselectedNotes, setDiselectedNotes] = useState([]);
  const [generatedAbcString, setGeneratedAbcString] = useState(
    "X:1\nM:4/4\nL:1/4\nK:C\nG,A,B,CDEFGABcdefgabc'"
  );

  return (
    <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
      <h1>Welcome to the Sight-Sing-Gym</h1>
      <StaveConfigurator setGeneratedAbcString={setGeneratedAbcString} />
      <GeneratedStave generatedAbcString={generatedAbcString} />
      <DroneButton />
    </div>
  );
}

export default Home;
