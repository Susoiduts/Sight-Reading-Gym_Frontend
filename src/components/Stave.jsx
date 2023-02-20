import ABCJS from "abcjs";
import React, { useEffect } from "react";

function Stave() {
  let keySignature = "C";
//   let abcString = "X:1<br/>L:1/1<br/>M:<br/>K:C<br/>V:V:V1 clef=treble<br/>G,A,B,CDEFGABcdefgabc'"
//   let abcString =`X:1\nK:${keySignature}\nDD AA|BBA2|\n`;

  useEffect(() => {
    ABCJS.renderAbc("paper", abcString);
  }, [abcString]);

  return (
    <>
      <p>Selected Key: {keySignature}</p>
      <div id="paper">Stave</div>
    </>
  );
}

export default Stave;
