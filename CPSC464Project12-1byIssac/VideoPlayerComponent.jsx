// VideoPlayerComponent.jsx
// Component for playing a selected video

import React from 'react';

const VideoPlayerComponent = ({ video }) => {
  if (!video) {
    return <div>Please select a video to play.</div>;
  }

  return (
    <div>
      <h2>{video.title}</h2>
      <video src={video.url} controls />
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayerComponent;
