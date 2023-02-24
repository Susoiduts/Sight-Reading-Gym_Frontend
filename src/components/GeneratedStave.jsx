import React from "react";
import ABCJS from "abcjs";
import { useEffect } from "react";

function GeneratedStave({ generatedAbcString}) {
    useEffect(() => {
        ABCJS.renderAbc(
          "excersiseStave",
          generatedAbcString,
          { selectionColor: "black" }
        );
      }, [generatedAbcString]);
  return (
    <>
  {/* <div>{generatedAbcString}</div> */}
  <div id="excersiseStave"></div>
  </>)
}

export default GeneratedStave;
