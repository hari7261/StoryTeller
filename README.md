# 📖 Storyteller

Welcome to the **Storyteller** repository! This project is a small, modern, and futuristic website where users can explore a variety of engaging stories from different categories such as Action, Horror, Adventure, Sci-Fi, Love, Romance, Comedy, Mystery, and more. This README will walk you through the structure, features, and setup of the project.

## 🌐 Website Preview

Check out the live demo: [Storyteller Website](https://story-teller-smoky.vercel.app/)

## 🛠️ Tech Stack

This project is built using:

- **HTML** for the structure
- **CSS** for styling (modern & futuristic design)
- **JavaScript** for interactivity
- **Markdown** for easy documentation

---

## 🎯 Features

- **📚 Story Categories**: Choose from a variety of genres like Action, Horror, Adventure, Sci-Fi, Romance, Comedy, and Mystery.
- **💻 Responsive Design**: Optimized for all devices—desktop, tablet, and mobile.
- **🌟 Futuristic Look**: Sleek animations and a modern user interface that give a unique experience.
- **🔄 Interactive UI**: Smooth transitions and engaging interactions for better user engagement.
- **🎨 Dark Mode**: Built-in support for dark mode for a sleek nighttime reading experience.
- **🔍 Search Functionality**: Quickly find your favorite stories by category.

---

## 📂 Project Structure

The project is organized as follows:

```bash
storyteller-website/
│
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling
├── script.js            # JavaScript file for interactivity
├── assets/              # Folder for images, icons, etc.
│   ├── logo.png         # Website logo
│   ├── icons/           # Category icons
│   └── backgrounds/     # Background images for each category
└── README.md            # Project README file
```

---

## 🔧 Installation & Setup

To run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Text editor (VS Code, Sublime Text, etc.)

### Clone the Repository

```bash
git clone https://github.com/your-username/storyteller-website.git
cd storyteller-website
```

### Open the Website Locally

Simply open the `index.html` file in your browser:

```bash
open index.html
```

---

## ✨ Usage

### Explore Stories by Category

Upon loading the website, you'll be greeted by a futuristic design with multiple categories to choose from. Here's a list of the available story genres:

| Category   | Icon 🏷️            | Description                                                                  |
|------------|--------------------|------------------------------------------------------------------------------|
| **Action** | 🏃‍♂️               | High-octane stories filled with intense sequences and thrilling moments.      |
| **Horror** | 👻                 | Spooky tales that will send chills down your spine.                          |
| **Adventure** | 🌍             | Embark on a journey with courageous characters.                              |
| **Sci-Fi** | 🚀                | Futuristic technology and space exploration stories.                         |
| **Love**   | 💖                 | Heartwarming stories of love and friendship.                                 |
| **Romance** | 💌               | Classic romantic tales full of passion and emotion.                          |
| **Comedy** | 😂                 | Humorous stories guaranteed to make you laugh out loud.                      |
| **Mystery** | 🕵️‍♂️            | Dive into stories filled with suspense and surprising twists.                |

### Navigating the Site

1. **Homepage**: From the homepage, you can select any story category.
2. **Story List**: After selecting a category, you'll be presented with a list of stories.
3. **Story Page**: Clicking on any story will take you to its detailed page, where you can read the full story.

### Dark Mode

- Toggle between **light mode** and **dark mode** for a more comfortable reading experience, especially at night.

---

## 📜 Code Snippets

Here are some key code snippets to understand the structure of the project:

### HTML - Category Grid

```html
<div class="category-grid">
  <div class="category">
    <img src="assets/icons/action.png" alt="Action">
    <h3>Action</h3>
  </div>
  <div class="category">
    <img src="assets/icons/horror.png" alt="Horror">
    <h3>Horror</h3>
  </div>
  <!-- Add other categories similarly -->
</div>
```

### CSS - Futuristic Design

```css
body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, #141e30, #243b55);
  color: #fff;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
}

.category {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;
}

.category:hover {
  transform: scale(1.05);
}
```

### JavaScript - Interactive Elements

```javascript
// Toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

document.querySelector('#darkModeToggle').addEventListener('click', toggleDarkMode);
```

---

## 🚀 Future Improvements

Some upcoming features and improvements include:

- **User Authentication**: Allow users to sign in and save their favorite stories.
- **Story Submission**: Allow users to submit their own stories in various categories.
- **Comments & Ratings**: Enable users to leave feedback and rate stories.
- **Voice Narration**: Add an option to listen to stories using voice narrators.

---

## 📝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork** the repository.
2. Create a new **branch**.
3. **Commit** your changes.
4. Push your branch and open a **pull request**.

Feel free to open issues if you encounter any bugs or want to request new features.

---

## 📃 License

This project is licensed under the MIT License.

---

## 💬 Contact

If you have any questions or feedback, feel free to reach out:

- GitHub: [hari7261](https://github.com/hari7261)
---

Thank you for checking out the **Storyteller Website**! Happy reading! 📚🎉
