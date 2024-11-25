import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import db from "./db.js"; // Import your database connection

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback", // Backend redirect URI
    },
    (accessToken, refreshToken, profile, done) => {
      // Save or find the user in the database
      const email = profile.emails[0].value;
      const name = profile.displayName;

      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {
          if (err) return done(err, null);

          if (results.length === 0) {
            // New user, insert into database
            db.query(
              "INSERT INTO users (username, email, googleId) VALUES (?, ?, ?)",
              [name, email, profile.id],
              (err, result) => {
                if (err) return done(err, null);
                return done(null, { id: result.insertId, name, email });
              }
            );
          } else {
            // Existing user
            return done(null, results[0]);
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return done(err, null);
    done(null, results[0]);
  });
});

export default passport;
