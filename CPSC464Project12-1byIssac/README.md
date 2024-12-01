# YouTube Clone Project

## Overview
This project is a YouTube-like application that allows users to upload, list, and play videos. It is built using React for the frontend and Express.js for the backend.

## Technologies Used
- **React**: For building the user interface.
- **Express.js**: Backend framework to provide REST APIs.
- **HTML & CSS**: For structuring and styling the UI.
- **Docker**: Containerization of services.
- **PostgreSQL/MySQL**: Relational database for storing video metadata.

## Installation & Setup

### Prerequisites
- Node.js
- npm or yarn

### Steps to Run the Project
1. **Clone the repository**:
   ```sh
   git clone [repository URL]
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
   The following packages are required:
   - **express**: For backend API.
   - **body-parser**: To parse JSON requests.
   - **cors**: To allow cross-origin requests.
   - **multer**: For file handling (uploading).

3. **Start the backend server**:
   - Navigate to the project root and run:
   ```sh
   node server.js
   ```
   The backend server will start on [http://127.0.0.1:5000](http://127.0.0.1:5000).

4. **Start the frontend React application**:
   - Make sure your frontend is properly set up and linked to the `index.html`.
   - Open the `index.html` file in a browser or use a bundler like Webpack to run it.

## File Structure
- **client.js**: Contains examples of how to interact with the backend endpoints.
- **index.html**: The root HTML file where the React app is rendered.
- **index.js**: Main entry point integrating all components.
- **VideoListComponent.jsx**: Component for listing videos.
- **VideoUploadComponent.jsx**: Component for uploading videos.
- **VideoPlayerComponent.jsx**: Component for playing selected videos.
- **server.js**: Backend server, providing APIs for video list and upload.
- **package.json** & **package-lock.json**: Define project dependencies.

## Contribution
Each member can add their own component:
- To add a new component or connect a new backend service, import it in `index.js` and integrate it within the main `<App />` component.

## License
This project is licensed under the MIT License.

## Authors
- **Member A**: Containerization with Docker.
- **Member B**: Service discovery using Kubernetes.
- **Member C**: Backend database integration.
- **Member D**: Microservices communication.
- **Issac Zhou CWID885251249**: Frontend development using React.
