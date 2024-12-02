const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "uploads" and public directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded videos
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like index.html, CSS, JS, etc.

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Save files to 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with unique name
  }
});

const upload = multer({ storage });

// Serve the index.html file at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// List all videos (video metadata)
app.get('/videos', (req, res) => {
  res.json({ videos });
});

// Mock database for storing video metadata
let videos = [];

// Upload a video file and save its metadata
app.post('/upload', upload.single('video'), (req, res) => {
  const { title, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'Video file is required' });
  }

  const video = {
    id: videos.length + 1,
    title: title || 'Untitled',
    description: description || 'No description provided',
    url: `/uploads/${req.file.filename}` // URL to access the video file
  };

  videos.push(video);
  res.status(201).json({ message: 'Video uploaded successfully', video });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
