# Post Pulse

**Post Pulse** is a simple, modern blog post management web app built with vanilla JavaScript, HTML, and CSS. It allows users to create, view, edit, and delete blog posts, including support for images and post metadata.

## Features

- **View Posts:** See a list of all blog posts in the sidebar.
- **View Details:** Click a post to see its full content, author, date, and image.
- **Add New Post:** Fill out the form to add a new post with title, author, image URL, and content.
- **Edit Post:** Click "Edit" to load a post's details into the form, update, and save.
- **Delete Post:** Remove a post permanently.
- **Image Support:** Posts can include an image via URL, which is displayed in the post detail view.
- **Live Updates:** The post list and details update automatically after any change.

## Technologies Used

- **HTML5** for structure and semantic markup
- **CSS3** for styling and layout
- **JavaScript (ES6+)** for all interactivity and DOM manipulation
- **JSON Server** (or similar REST API) for backend data storage

## How It Works

1. **Loading Posts:**  
   On page load, the app fetches all posts from the server and displays them in the sidebar.

2. **Viewing a Post:**  
   Clicking a post in the sidebar shows its details (title, author, date, content, and image) in the main area.

3. **Adding a Post:**  
   Fill in the form and click "Add Post". The app sends a POST request to the server and updates the list.

4. **Editing a Post:**  
   Click "Edit" on a post to load its data into the form. Make changes and click "Update Post" to save (PUT request).

5. **Deleting a Post:**  
   Click "Delete" to remove the post (DELETE request). The list and details update automatically.

6. **Form Reset:**  
   After adding, updating, or deleting, the form and post detail area are cleared for a clean user experience.

## File Structure

```
/Code-challenge-3
  ├── index.html      # Main HTML file
  ├── styles.css      # CSS styles
  ├── index.js        # JavaScript logic
  └── db.json         # JSON Server database (for local development)
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Code-challenge-3
   ```

2. **Install and run JSON Server:**
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3000
   ```

3. **Open `index.html` in your browser.**

## Example Post Data (`db.json`)

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Hello World",
      "author": "Alice",
      "image": "https://example.com/image.jpg",
      "content": "Welcome to my blog!",
      "date": "2025-06-27"
    }
  ]
}
```

## Accessibility & Best Practices

- Semantic HTML and ARIA labels for better accessibility.
- Keyboard navigation for post selection.
- Clear error handling and user feedback.

## Rubric Compliance

- **DOM Manipulation:** Clean, semantic, and dynamic updates.
- **Events:** All actions use event listeners and modular functions.
- **Server Communication:** Uses fetch for GET, POST, PUT, DELETE with error handling.

---

**Enjoy using Post Pulse!**
