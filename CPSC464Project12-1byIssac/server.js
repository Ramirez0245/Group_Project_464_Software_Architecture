const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Mock database for storing videos
let videos = [];
//    =====================   Multer: Start  ===================== 
const multer = require('multer')
//NOTE: Cannot handle file uplaods witht the same name.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './'); // Location to store
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
//    =====================   Multer: End    ===================== 
// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Video API! Use /videos to list videos or /upload to upload.');
});

// List all videos
app.get('/videos', (req, res) => {
  res.json({ videos });
});

// Upload a video
app.post('/uploads', (req, res) => {
  const { title, url, description } = req.body;

  if (!title || !url) {
    return res.status(400).json({ error: 'Title and URL are required' });
  }

  const video = {
    id: videos.length + 1,
    title,
    url,
    description: description || 'No description provided'
  };

  videos.push(video);
  res.status(201).json({ message: 'Video uploaded successfully', video });
});

//    ===================== Upload Video: Start  ============================
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json(req.file);
});
//    ===================== Upload Video: End    ============================
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
