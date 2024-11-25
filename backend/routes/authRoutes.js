import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

// Existing routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful Google login
    res.redirect("http://localhost:5173"); // Redirect to your frontend
  }
);

export default router;
