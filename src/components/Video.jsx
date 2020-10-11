import React from "react";

const Video = () => {
  return (
    <div id="video-box">
      <video autoPlay muted loop id="video-bg">
        <source
          src="video-background/Hardwell%20.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default Video;
