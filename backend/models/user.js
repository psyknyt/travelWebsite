// backend/models/User.js
import db from '../config/db.js';
import bcrypt from 'bcrypt';

export const createUser = (username, email, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO users (username, email, password, isAdmin) VALUES (?, ?, ?, ?)';
  
    // Add 'FALSE' for isAdmin by default
    db.query(query, [username, email, hashedPassword, false], callback);
  };

export const findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};
