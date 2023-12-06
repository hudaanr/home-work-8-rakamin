const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Actor Schema
const actorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Actor = mongoose.model('Actor', actorSchema);

// Seeding data for actor table
const seedActors = async () => {
  await Actor.create([
    { name: 'Actor 1', age: 30 },
    { name: 'Actor 2', age: 25 },
    { name: 'Actor 3', age: 35 },
    { name: 'Actor 4', age: 28 },
    { name: 'Actor 5', age: 40 },
  ]);
};

seedActors();

// Migration: Add age column to the actor table
// Note: This is a basic example; actual migrations may require more complexity
const addAgeColumn = async () => {
  await mongoose.connection.db.collection('actors').updateMany({}, { $set: { age: null } });
};

addAgeColumn();

// Routes
app.get('/films', async (req, res) => {
  // 1. Menampilkan data seluruh list film
  // Implement query to fetch all films
});

app.get('/films/:id', async (req, res) => {
  // 2. Menampilkan data film tertentu berdasarkan id
  // Implement query to fetch film by id
});

app.get('/categories', async (req, res) => {
  // 3. Menampilkan data list category
  // Implement query to fetch all categories
});

app.get('/films/category/:category', async (req, res) => {
  // 4. Menampilkan data list film berdasarkan category
  // Implement query to fetch films by category
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
