import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    className="videoWrapper"
    style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
  >
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      width="560"
      height="315"
      className="video"
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video
