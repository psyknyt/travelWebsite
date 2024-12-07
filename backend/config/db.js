// backend/config/db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to MySQL Database.');
    }
});

export default db;
