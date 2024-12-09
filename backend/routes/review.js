import express from "express";
const router = express.Router();
import db from "../config/db.js";

// 1. API to Upload a Review
router.post("/add", (req, res) => {
  const { name, email, review, stars } = req.body;

  // Validate input
  if (!name || !email || !review || stars === undefined || stars < 1 || stars > 5) {
    return res.status(400).json({ 
      message: "Invalid input. Name, email, review, and stars are required. Stars must be between 1 and 5." 
    });
  }

  const query = "INSERT INTO reviews (name, email, review, stars) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, review, stars], (err, result) => {
    if (err) {
      console.error("Error inserting review:", err);
      return res.status(500).json({ message: "Database error." });
    }
    res.status(201).json({ message: "Review added successfully!", reviewId: result.insertId });
  });
});

// 2. API to Fetch All Reviews
router.get("/all", (req, res) => {
  const query = "SELECT id, name, email, review, stars, created_at FROM reviews ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching reviews:", err);
      return res.status(500).json({ message: "Database error." });
    }
    res.status(200).json(results);
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
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, review, stars } = req.body;

  // Validate input
  if (!name || !email || !review || stars === undefined || stars < 1 || stars > 5) {
    return res.status(400).json({ 
      message: "Invalid input. Name, email, review, and stars are required. Stars must be between 1 and 5." 
    });
  }

  const query = "UPDATE reviews SET name = ?, email = ?, review = ?, stars = ? WHERE id = ?";
  db.query(query, [name, email, review, stars, id], (err, result) => {
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
