// VideoUploadComponent.jsx
// Component for uploading a new video

import React, { useState } from 'react';

const VideoUploadComponent = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = () => {
    const videoData = { title, url, description };

    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoData)
    })
      .then(response => response.json())
      .then(data => console.log('Uploaded Video:', data))
      .catch(error => console.error('Upload Error:', error));
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUploadComponent;
