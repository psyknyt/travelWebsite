import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch images when the component loads
  useEffect(() => {
    fetchImages();
  }, []);

  // Fetch images from the API
  const fetchImages = () => {
    axios
      .get("http://localhost:5000/api/images")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setMessage("Failed to fetch images.");
      });
  };

  // Handle image upload
  const handleUpload = (e) => {
    e.preventDefault();

    if (!imageFile || !imageName) {
      setMessage("Please provide an image and a name.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("imageName", imageName);

    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        setMessage("Image uploaded successfully!");
        fetchImages(); // Refresh image list
        setImageName("");
        setImageFile(null);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setMessage("Failed to upload image.");
      });
  };

  // Handle image deletion
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/images/${id}`)
      .then(() => {
        setMessage("Image deleted successfully!");
        fetchImages(); // Refresh image list
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
        setMessage("Failed to delete image.");
      });
  };

  // Inline styles
  const styles = {
    dashboard: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    uploadForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "5px",
    },
    input: {
      padding: "8px",
      fontSize: "16px",
      width: "200px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    message: {
      textAlign: "center",
      margin: "10px 0",
      color: "green",
    },
    imageList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      listStyle: "none",
      padding: "0",
    },
    imageItem: {
      textAlign: "center",
    },
    imagePreview: {
      border: "1px solid #ccc",
      padding: "5px",
      borderRadius: "5px",
    },
    deleteButton: {
      marginTop: "5px",
      padding: "5px 10px",
      fontSize: "14px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.header}>Image Dashboard</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} style={styles.uploadForm}>
        <div style={styles.formGroup}>
          <label htmlFor="imageName" style={styles.label}>
            Image Name:
          </label>
          <input
            id="imageName"
            type="text"
            placeholder="Enter image name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="imageFile" style={styles.label}>
            Choose Image:
          </label>
          <input
            id="imageFile"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Upload
        </button>
      </form>

      {/* Success/Error Messages */}
      {message && <p style={styles.message}>{message}</p>}

      {/* Uploaded Images */}
      <h2 style={styles.header}>Uploaded Images</h2>
      <ul style={styles.imageList}>
        {images.map((image) => (
          <li key={image.id} style={styles.imageItem}>
            <img
              src={image.image_data}
              alt={image.image_name}
              width="100"
              style={styles.imagePreview}
            />
            <p>{image.image_name}</p>
            <button
              onClick={() => handleDelete(image.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
