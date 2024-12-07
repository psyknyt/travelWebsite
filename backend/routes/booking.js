import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Route to handle booking data submission
router.post("/book", (req, res) => {
  const { name, email, tourType, message } = req.body;

  if (!name || !email || !tourType) {
    return res.status(400).json({ message: "Name, email, and tour type are required" });
  }

  db.query(
    "INSERT INTO bookings (name, email, tour_type, message, created_at) VALUES (?, ?, ?, ?, NOW())",
    [name, email, tourType, message],
    (error, results) => {
      if (error) {
        console.error("Error saving booking:", error);
        return res.status(500).json({ message: "Failed to save booking" });
      }
      res.status(201).json({ message: "Booking saved successfully", bookingId: results.insertId });
    }
  );
});

// Route to fetch all bookings
router.get("/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (error, results) => {
    if (error) {
      console.error("Error fetching bookings:", error);
      return res.status(500).json({ message: "Failed to fetch bookings" });
    }
    res.json(results);
  });
});

// Route to delete a booking by ID
router.delete("/bookings/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM bookings WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error deleting booking:", error);
      return res.status(500).json({ message: "Failed to delete booking" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  });
});

export default router;
