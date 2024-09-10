// Function to handle comment submission
function handleCommentSubmission(formId, nameId, messageId, listId) {
    const form = document.getElementById(formId);
    const nameInput = document.getElementById(nameId);
    const messageInput = document.getElementById(messageId);
    const commentsList = document.getElementById(listId);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            const commentItem = document.createElement('li');
            commentItem.textContent = `${name}: ${message}`;
            commentsList.appendChild(commentItem);

            // Clear the inputs
            nameInput.value = '';
            messageInput.value = '';
        }
    });
}

// Attach the function to each comment form
handleCommentSubmission('commentForm1', 'name1', 'message1', 'commentsList1');
handleCommentSubmission('commentForm2', 'name2', 'message2', 'commentsList2');
handleCommentSubmission('commentForm3', 'name3', 'message3', 'commentsList3');

// Function to handle search functionality
function handleSearch() {
    const searchBar = document.getElementById('searchBar');
    const blogPosts = document.querySelectorAll('.blog-post');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();

        blogPosts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(query) || content.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

// Call the search function
handleSearch();

// Function to handle social media sharing (for demonstration purposes)
function sharePost(postId) {
    const post = document.getElementById(postId);
    const title = post.querySelector('h2').textContent;
    const url = window.location.href;

    // Replace with actual sharing URL if using social media APIs
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    if (event.target.textContent.includes('Twitter')) {
        window.open(twitterUrl, '_blank');
    } else if (event.target.textContent.includes('Facebook')) {
        window.open(facebookUrl, '_blank');
    }
}

// Function to filter blog posts by category
function filterPosts(tag) {
    const blogPosts = document.querySelectorAll('.blog-post');

    blogPosts.forEach(post => {
        const tags = post.getAttribute('data-tags').split(',').map(t => t.trim());
        if (tags.includes(tag)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

