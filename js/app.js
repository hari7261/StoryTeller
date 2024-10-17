// Function to fetch and display the story content from a markdown file
function loadStory(category) {
    const url = `/stories/${category}.md`; // Construct the URL
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Story file not found');
            }
            return response.text();
        })
        .then(markdown => {
            // Use marked.js to convert markdown to HTML
            const htmlContent = marked.parse(markdown);
            // Insert HTML content into the page
            document.getElementById('story-content').innerHTML = htmlContent;
        })
        .catch(error => {
            document.getElementById('story-content').innerHTML = "Story not found!";
            console.error("Error loading story:", error);
        });
}

// Check the URL for the category query parameter
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category) {
    document.getElementById('story-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);
    loadStory(category);
} else {
    console.error("No category found in the URL parameters.");
}
