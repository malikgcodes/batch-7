
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

// Load environment variables
dotenv.config();

const app = express();

// Connect Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// Initialize database connection

// Middleware initialization
app.use(express.json()); // Parse incoming JSON requests

// Basic route to test the API
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// app.use('/api/users', require('./routes/users'));

// Define Port and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`)
});
