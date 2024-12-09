import express from "express";
import multer from "multer"; // For handling image uploads
const router = express.Router();
import db from "../config/db.js";

// Multer setup for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 1. API to Upload a Review
router.post("/add", upload.single("image"), (req, res) => {
  const { name, email, review, stars } = req.body;
  const image = req.file ? req.file.buffer : null;

  // Validate input
  if (!name || !email || !review || stars === undefined || stars < 1 || stars > 5) {
    return res.status(400).json({
      message: "Invalid input. Name, email, review, and stars are required. Stars must be between 1 and 5.",
    });
  }

  const query = "INSERT INTO reviews (name, email, review, stars, image) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, email, review, stars, image], (err, result) => {
    if (err) {
      console.error("Error inserting review:", err);
      return res.status(500).json({ message: "Database error." });
    }
    res.status(201).json({ message: "Review added successfully!", reviewId: result.insertId });
  });
});

// 2. API to Fetch All Reviews
router.get("/all", (req, res) => {
  const query = "SELECT id, name, email, review, stars, created_at, image FROM reviews ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching reviews:", err);
      return res.status(500).json({ message: "Database error." });
    }

    const reviews = results.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      review: row.review,
      stars: row.stars,
      created_at: row.created_at,
      image: row.image ? `data:image/jpeg;base64,${row.image.toString("base64")}` : null,
    }));

    res.status(200).json(reviews);
  });
});

// 3. API to Delete a Review by ID
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM reviews WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting review:", err);
      return res.status(500).json({ message: "Database error." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Review not found." });
    }
    res.status(200).json({ message: "Review deleted successfully!" });
  });
});

// 4. API to Update a Review by ID
router.put("/update/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const { name, email, review, stars } = req.body;
  const image = req.file ? req.file.buffer : null;

  // Validate input
  if (!name || !email || !review || stars === undefined || stars < 1 || stars > 5) {
    return res.status(400).json({
      message: "Invalid input. Name, email, review, and stars are required. Stars must be between 1 and 5.",
    });
  }

  const query = image
    ? "UPDATE reviews SET name = ?, email = ?, review = ?, stars = ?, image = ? WHERE id = ?"
    : "UPDATE reviews SET name = ?, email = ?, review = ?, stars = ? WHERE id = ?";

  const params = image ? [name, email, review, stars, image, id] : [name, email, review, stars, id];

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Error updating review:", err);
      return res.status(500).json({ message: "Database error." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Review not found." });
    }
    res.status(200).json({ message: "Review updated successfully!" });
  });
});

export default router;
