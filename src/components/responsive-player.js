import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const ResponsivePlayer = ({ url, onProgress }) => {
  const [watchComplete, setWatchComplete] = useState(0);

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div className="ready-player-wrapper">
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
