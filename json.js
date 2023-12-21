 const news = document.getElementById("news");

function addPost(post) {
    const newPost = document.createElement("div");
    newPost.classList.add("post")
    const title = document.createElement("h2");
    title.textContent = `Заголовок: ${post.title}`;
    title.classList.add("post-title");
    newPost.appendChild(title);
    const postText = document.createElement("p");
    postText.textContent = `Статья: ${post.body}`;
    newPost.appendChild(postText);
    postText.classList.add("post-text")
    news.appendChild(newPost);
}

function publishPost() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach((post) => {
                addPost(post);
            });
        })
        .catch((error) => {
            console.error("Ошибка", error);
        });
}

publishPost();