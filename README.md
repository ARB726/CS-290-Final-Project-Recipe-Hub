# CS-290-Final-Project-Recipe-Hub
1. High-Level Description of the Application’s Purpose:
The Recipe Hub is a web application designed for users to create, share, and discover recipes. Users can submit their own recipes, complete with ingredients, instructions, and images, or browse and search through a collection of recipes contributed by others. The app provides filters by cuisine, dietary preferences, difficulty, and more, making it easy to find recipes that suit different needs.

2. High-Level Visual Design:
Homepage: The homepage will feature a search bar at the top and category filters (e.g., Vegan, Desserts, Quick Meals) below it. Below the search and filters, there will be a section showcasing popular or newly added recipes with a thumbnail, title, and brief description.
Recipe Listing Page: This page will display a grid or list of recipes based on the user’s search or selected filters. Each recipe will be shown as a card with an image, title, and summary.
Recipe Detail Page: When a user clicks on a recipe, they’ll be taken to a detailed page with:
Recipe Title and Image: At the top of the page.
Ingredients List: Displayed in a clear format.
Instructions: Step-by-step instructions for creating the dish.
Additional Information: Category tags, preparation time, difficulty level, and user-uploaded images.
Favorite Button: Allowing users to save recipes to their profile.
User Profile Page: Here, users can view their submitted recipes and favorite recipes. Users can edit or delete recipes they created.
3. High-Level Overview of the Data Needed:
User Data:

Username
Email
Password (hashed for security)
List of favorite recipes
List of submitted recipes
Recipe Data:

Recipe title
Description
Ingredients (stored as a list of text items)
Instructions (stored as a list of steps)
Image(s) URL or file
Category tags (e.g., Vegan, Dessert, Italian)
Preparation time
Difficulty level (e.g., Easy, Medium, Hard)
Category Data:

A list of predefined categories (e.g., Vegan, Quick Meals, Desserts) to filter recipes
This design keeps the app user-friendly and allows for easy scalability if you want to add features later on, like user reviews, ratings, or personalized recommendations. Let me know if you'd like more detail on any specific part!


To divide the work among four team members, we can organize it by specific responsibilities within the frontend, backend, database, and deployment stages of the project. Here’s how it could be structured:

1. Frontend Developer (HTML, CSS, Basic JavaScript)
Responsibilities:
Design and structure all main pages: Home, Recipe Listing, Recipe Detail, and User Profile.
Create the HTML structure for displaying recipes, filters, search bar, and forms.
Style the application with CSS, ensuring a clean and responsive design.
Add JavaScript for basic interactivity, such as form validation and navigating between pages.
Tools: HTML, CSS, JavaScript, (Optional: Bootstrap or Tailwind CSS for styling).
2. Frontend Developer (Advanced JavaScript and Client-Side Interactions)
Responsibilities:
Develop client-side interactivity using JavaScript, especially dynamic filtering and search functionalities.
Implement form handling and modal popups for adding new recipes or editing profiles.
Handle data fetching and updating the DOM in real-time (AJAX or Fetch API).
Potentially set up React or Vue.js for a more dynamic, component-based frontend experience.
Tools: JavaScript, (Optional: React.js or Vue.js).
3. Backend Developer (Server-Side Logic and API Development)
Responsibilities:
Set up the backend server using Node.js and Express.js (or Flask/Django if using Python).
Develop API routes for handling requests (e.g., getting recipes, adding new recipes, managing user accounts).
Implement user authentication and authorization, allowing users to sign in and manage their accounts.
Ensure backend logic for handling data securely and efficiently.
Tools: Node.js, Express.js, (Optional: Flask/Django for Python).
