const baseUrl = "http://127.0.0.1:5000";

// List videos
fetch(`${baseUrl}/videos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => console.log("Videos:", data))
  .catch(error => console.error("Fetch error:", error));

// Upload a video
const videoData = {
  title: "random title",
  url: "random url",
  description: "random description"
};

fetch(`${baseUrl}/upload`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(videoData)
})
  .then(response => response.json())
  .then(data => console.log("Uploaded Video:", data))
  .catch(error => console.error("Upload Error:", error));
