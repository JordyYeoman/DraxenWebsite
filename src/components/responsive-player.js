import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import motion from "framer-motion";

const ResponsivePlayer = ({ url, onProgress }) => {
  const [watchComplete, setWatchComplete] = useState(0);

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div className="ready-player-wrapper">
      <div className="ready-player-wrapper-border"></div>
      <span className="ready-player-wrapper-layer1"></span>
      <span className="ready-player-wrapper-layer2"></span>
      <span
        className={
          watchComplete
            ? "ready-react-player-line1color-complete"
            : "ready-react-player-line1color-notcomplete"
        }
      ></span>
      <ReactPlayer
        className="ready-react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        onProgress={handleWatchComplete}
      />
      <span
        className={
          watchComplete
            ? "ready-react-player-line2color-complete"
            : "ready-react-player-line2color-notcomplete"
        }
      ></span>
    </div>
  );
};

export default ResponsivePlayer;
