import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import motion from "framer-motion";

const ResponsivePlayer2 = ({ url, onProgress }) => {
  const [watchComplete, setWatchComplete] = useState(0);

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div className="ready-player-wrapper2">
      <ReactPlayer
        className="react-player2"
        url={url}
        width="100%"
        height="85%"
        controls={true}
        onProgress={handleWatchComplete}
      />
    </div>
  );
};

export default ResponsivePlayer2;
