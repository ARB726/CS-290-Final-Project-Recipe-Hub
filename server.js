const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// In-Memory Data
let recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Garlic"],
    instructions: ["Boil spaghetti", "Cook beef", "Mix with sauce"],
    category: "Italian",
    prepTime: 30,
    difficulty: "Medium",
  },
];

let users = [
  {
    username: "john_doe",
    email: "john@example.com",
    favorites: [],
  },
];

// Routes

// Homepage
app.get("/", (req, res) => {
  res.send("Welcome to Recipe Hub!");
});

// Get all recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

// Get a specific recipe by ID
app.get("/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.json(recipe);
});

// Add a new recipe
app.post("/recipes", (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    category: req.body.category,
    prepTime: req.body.prepTime,
    difficulty: req.body.difficulty,
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Update an existing recipe
app.put("/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  recipe.title = req.body.title || recipe.title;
  recipe.description = req.body.description || recipe.description;
  recipe.ingredients = req.body.ingredients || recipe.ingredients;
  recipe.instructions = req.body.instructions || recipe.instructions;
  recipe.category = req.body.category || recipe.category;
  recipe.prepTime = req.body.prepTime || recipe.prepTime;
  recipe.difficulty = req.body.difficulty || recipe.difficulty;
  res.json(recipe);
});

// Delete a recipe
app.delete("/recipes/:id", (req, res) => {
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(req.params.id));
  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  recipes.splice(recipeIndex, 1);
  res.json({ message: "Recipe deleted successfully" });
});

// User routes (favorites)

// Get a user's favorite recipes
app.get("/users/:username/favorites", (req, res) => {
  const user = users.find((u) => u.username === req.params.username);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const favoriteRecipes = user.favorites.map((id) =>
    recipes.find((r) => r.id === id)
  );
  res.json(favoriteRecipes);
});

// Add a recipe to favorites
app.post("/users/:username/favorites", (req, res) => {
  const user = users.find((u) => u.username === req.params.username);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const recipeId = parseInt(req.body.recipeId);
  if (!recipes.find((r) => r.id === recipeId)) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  if (!user.favorites.includes(recipeId)) {
    user.favorites.push(recipeId);
  }
  res.json(user.favorites);
});

// Start the server
app.listen(port, () => {
  console.log(`Recipe Hub app is running at http://localhost:${port}`);
});
