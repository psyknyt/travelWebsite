import express from "express";
import db from "../config/db.js";
import multer from "multer";

const router = express.Router();

// Multer setup for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload image, image name, and price to the database
router.post("/upload", upload.single("image"), (req, res) => {
  const { image_name, price } = req.body;

  if (!image_name || !price || !req.file) {
    return res.status(400).json({ message: "Image, image name, and price are required" });
  }

  const image = req.file.buffer; // Buffer for the binary data of the image
  const rating = 5; // Default rating

  db.query(
    "INSERT INTO most_popular_tours (image, image_name, price, rating) VALUES (?, ?, ?, ?)",
    [image, image_name, price, rating],
    (error, results) => {
      if (error) {
        console.error("Error uploading image:", error);
        return res.status(500).json({ message: "Failed to upload image" });
      }
      res.status(201).json({ message: "Image uploaded successfully", id: results.insertId });
    }
  );
});

// Route to fetch all images with name, rating, and price
router.get("/fetch", (req, res) => {
    db.query("SELECT id, image_name, image, rating, price FROM most_popular_tours", (error, results) => {
      if (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ message: "Failed to fetch data" });
      }
  
      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No records found" });
      }
  
      // Safely process each row
      const tours = results.map((row) => ({
        id: row.id,
        image_name: row.image_name,
        rating: row.rating,
        price: row.price,
        image: row.image
          ? `data:image/jpeg;base64,${Buffer.from(row.image).toString("base64")}`
          : null, // Handle null or undefined image data
      }));
  
      res.json(tours);
    });
  });
  

// Route to delete an image entry by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM most_popular_tours WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error deleting image:", error);
      return res.status(500).json({ message: "Failed to delete image" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.json({ message: "Image deleted successfully" });
  });
});

export default router;
