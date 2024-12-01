import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import path from "path"; // Added for serving static files
import authRoutes from "./routes/authRoutes.js";
import db from "./config/db.js";
import "./config/passport.js"; // Import the Google OAuth configuration

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

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
app.get("/api/auth/google/callback", 
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

// Serve static images
const __dirname = path.resolve(); // Current directory
const imagesPath = path.join(__dirname, "images");
app.use("/images", express.static(imagesPath));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Serving images at http://localhost:${PORT}/images`);
});
