// Main entry point for YouTube Clone project
// This file integrates all the main components of the React frontend

import React from 'react';
import ReactDOM from 'react-dom';
import VideoListComponent from './VideoListComponent';
import VideoUploadComponent from './VideoUploadComponent';
import VideoPlayerComponent from './VideoPlayerComponent';

// Main App component that integrates all parts of the YouTube Clone application
// This file can be extended to include and connect the parts from other team members.
// To add new components or services, import them at the top and include them in the App component.
// For example:
// import ContainerizationInfo from './ContainerizationInfo';
// import ServiceDiscovery from './ServiceDiscovery';
const App = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div>
      <h1>YouTube Clone</h1>
      <div>
        {/* Upload Video Component */}
        <VideoUploadComponent />
      </div>
      <div>
        {/* Video List Component */}
        <VideoListComponent onVideoSelect={(video) => setSelectedVideo(video)} />
      </div>
      <div>
        {/* Video Player Component */}
        <VideoPlayerComponent video={selectedVideo} />
      </div>
      <div>
        {/* Additional Components from Team Members Can Be Integrated Below */}
        {/* Example: ContainerizationInfo, ServiceDiscovery, etc. */}
        {/* Add the new components here, for example: */}
        {/* <ContainerizationInfo /> */}
        {/* <ServiceDiscovery /> */}
      </div>
    </div>
  );
};

// Rendering the main App component into the root element of the index.html
ReactDOM.render(<App />, document.getElementById('root'));
