import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Route to add a new blog
router.post("/blogs/add", (req, res) => {
  const { user_name, blog } = req.body;

  if (!user_name || !blog) {
    return res.status(400).json({ message: "User name and blog content are required" });
  }

  db.query(
    "INSERT INTO blogs (user_name, blog, posted_at) VALUES (?, ?, NOW())",
    [user_name, blog],
    (error, results) => {
      if (error) {
        console.error("Error adding blog:", error);
        return res.status(500).json({ message: "Failed to add blog" });
      }
      res.status(201).json({ message: "Blog added successfully", blogId: results.insertId });
    }
  );
});

// Route to fetch all blogs
router.get("/blogs/fetch", (req, res) => {
  db.query("SELECT * FROM blogs ORDER BY posted_at DESC", (error, results) => {
    if (error) {
      console.error("Error fetching blogs:", error);
      return res.status(500).json({ message: "Failed to fetch blogs" });
    }
    res.json(results);
  });
});

// Route to delete a blog by ID
router.delete("/blogs/delete/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM blogs WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error deleting blog:", error);
      return res.status(500).json({ message: "Failed to delete blog" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  });
});

export default router;
