import React from "react";
import YouTube from "react-youtube";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useState } from "react";

function Acknowledgements() {
  //handling of youtube api
  const [trick, setTrick] = useState(0);
  const [player, setPlayer] = useState(null);

  const onReady = (e) => {
    setPlayer(e.target);
  };

  const onEnd = (e) => {
    setTrick((prev) => (prev == 0 ? 1 : 0));
  };

  const onPlayHandler = () => {
    console.log("Volume up clicked!");
    player.playVideo();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>Thank you!</p>
      <p>
        Thanks a lot to Sarah - the best instructor you could wish for - and the
        whole WBS Coding School Team.
      </p>
      <p>I had a great time, learned a lot and really enjoyed the journey.</p>
      <br />
      <p style={{ fontSize: "18px", fontStyle: "italic" }}>
        Standing on the shoulders of giants ...{" "}
      </p>
      <p>
        Thank you to Paul Rosen and Gregory Dyke for creating the fantastic{" "}
        <a href="https://www.abcjs.net/">abcjs-library</a>.
      </p>
      <br />
      <div>
        <VolumeUpIcon sx={{ fontSize: 60, opacity: 0.5 }} onClick={onPlayHandler} />
      </div>
      <div className="player">
        <YouTube
          videoId={"NjbpaM84VxM"}
          onReady={onReady}
          onEnd={onEnd}
          opts={{
            height: "0",
            width: "0",
            playerVars: {
              controls: trick,
              start: 152,
              end: 168,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Acknowledgements;
