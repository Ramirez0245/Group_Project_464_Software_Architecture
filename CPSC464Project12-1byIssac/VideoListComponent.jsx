// VideoListComponent.jsx
// Component for displaying a list of videos

import React, { useEffect, useState } from 'react';

const VideoListComponent = ({ onVideoSelect }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data.videos))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id} onClick={() => onVideoSelect(video)}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default VideoListComponent;
