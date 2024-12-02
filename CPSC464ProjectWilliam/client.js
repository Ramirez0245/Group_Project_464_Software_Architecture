const baseUrl = "http://127.0.0.1:5000";

document.getElementById('uploadForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submission

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const videoFile = document.getElementById('video').files[0];

  if (!videoFile) {
    alert('Please select a video file to upload.');
    return;
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('video', videoFile);

  try {
    const response = await fetch(`${baseUrl}/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Uploaded Video:', data);
    alert('Video uploaded successfully!');
  } catch (error) {
    console.error('Upload Error:', error);
  }
});
