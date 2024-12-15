import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import "./config/passport.js";  // Ensure this import is present
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import db from "./config/db.js";
import multer from "multer"; // Added for handling file uploads
import jwt from "jsonwebtoken";
import passport from "passport";
import bookingRoutes from "./routes/booking.js";
import reviewRoutes from "./routes/review.js";
import blogRoutes from "./routes/blog.js";
import popularTourRoutes from "./routes/most_popular_tour.js";
import heroSectionRoutes from "./routes/hero_section.js";
import topSpotsRoutes from "./routes/topspots.js";









dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Add these lines to increase the upload size limit
app.use(express.json({ limit: "100mb" })); 
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// Add booking routes
app.use("/api", bookingRoutes);

// Routes for review 
app.use("/api/reviews", reviewRoutes);

// Routes for blogs
app.use("/api", blogRoutes);

//Routes for most_popular_tours
app.use("/api/most_popular_tours", popularTourRoutes);

//Routes for hero section
app.use("/api/hero_section", heroSectionRoutes);

//Routes for topspots
app.use("/api/top_spots", topSpotsRoutes);




// Add session middleware for Google OAuth
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Existing routes
app.use("/api/auth", authRoutes);

// Google login route
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback route
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:5173?token=${token}`);
  }
);

// Logout route
app.get("/api/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Logout failed");
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

// Multer configuration for handling image uploads
const upload = multer({ storage: multer.memoryStorage() });

// Image upload route with image_name support
app.post("/api/slider_upload", upload.single("image"), (req, res) => {
  //console.log("Upload endpoint hit");
  const { imageName } = req.body; // Expecting imageName from the frontend

  if (!req.file || !imageName) {
    return res.status(400).json({ message: "File or image name missing" });
  }

  const imageData = req.file.buffer; // Image data as buffer

  db.query(
    "INSERT INTO slider_images (image_data, image_name, created_at) VALUES (?, ?, NOW())",
    [imageData, imageName],
    (error, results) => {
      if (error) {
        if (error.fatal) {
          console.error('Fatal error in database connection:', error);
        }else{
        console.error("Error uploading image:", error);}
        return res.status(500).json({ message: "Failed to upload image" });
      }
      res.status(201).json({
        message: "Image uploaded successfully",
        imageId: results.insertId,
      });
    }
  );
});


app.get("/api/slider_images", (req, res) => {
  db.query("SELECT id, image_name, image_data, location FROM slider_images", (error, results) => {
    if (error) {
      console.error("Error fetching images:", error);
      return res.status(500).json({ message: "Failed to fetch images" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    // Convert binary image data to base64 for each image
    const images = results.map((row) => ({
      id: row.id,
      image_name: row.image_name,
      location: row.location,
      image_data: `data:image/jpeg;base64,${Buffer.from(row.image_data).toString("base64")}`,
    }));

    res.json(images); // Send images as JSON
  });
});


// delete image by ID route
app.delete("/api/slider_images/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM slider_images WHERE id = ?", [id], (error) => {
    if (error) {
      console.error("Error deleting image:", error);
      return res.status(500).json({ message: "Failed to delete image" });
    }
    res.status(200).json({ message: "Image deleted successfully" });
  });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
