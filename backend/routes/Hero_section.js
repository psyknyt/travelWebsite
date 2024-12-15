import express from "express";
import multer from "multer";
import db from "../config/db.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API to upload an image to the `hero_section` table
router.post("/upload", upload.single("image"), (req, res) => {
  const { originalname } = req.file;
  const imageData = req.file.buffer;

  if (!imageData || !originalname) {
    return res.status(400).json({ message: "Image and image name are required" });
  }

  db.query(
    "INSERT INTO hero_section (image_data, image_name) VALUES (?, ?)",
    [imageData, originalname],
    (error, results) => {
      if (error) {
        console.error("Error uploading image:", error);
        return res.status(500).json({ message: "Failed to upload image" });
      }
      res.status(201).json({ message: "Image uploaded successfully", id: results.insertId });
    }
  );
});

// API to fetch all images from the `hero_section` table
router.get("/", (req, res) => {
  db.query("SELECT id, image_name, image_data, created_at FROM hero_section", (error, results) => {
    if (error) {
      console.error("Error fetching images:", error);
      return res.status(500).json({ message: "Failed to fetch images" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    // Convert binary image data to base64
    const images = results.map((row) => ({
      id: row.id,
      image_name: row.image_name,
      image_data: `data:image/jpeg;base64,${Buffer.from(row.image_data).toString("base64")}`,
      created_at: row.created_at,
    }));

    res.json(images);
  });
});

// API to delete an image from the `hero_section` table by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM hero_section WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error deleting image:", error);
      return res.status(500).json({ message: "Failed to delete image" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json({ message: "Image deleted successfully" });
  });
});

export default router;
