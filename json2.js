const news = document.getElementById("news");
const inputTitle = document.getElementById("inputTitle");
const inputText = document.getElementById("inputText");
const button = document.getElementById("button");
const error = document.getElementById("error");

function addPost(post) {
    const newPost = document.createElement("div");
    newPost.classList.add("post")
    const title = document.createElement("h2");
    title.textContent = `Заголовок: ${post.title}`;
    title.classList.add("h2");
    newPost.appendChild(title);
    const postText = document.createElement("p");
    postText.textContent = `Статья: ${post.body}`;
    newPost.appendChild(postText);
    postText.classList.add("post-text")
    news.appendChild(newPost);
}

function checkPost() {
let inputTitleValue = inputTitle.value;
let inputTextValue = inputText.value;
if (!inputTitleValue.trim() || !inputTextValue.trim()) {
    error.style.display = "flex";
    return false;
} else {
    error.style.display = "none"
    return true
}
}

function postPosts(){
let inputTitleValue = inputTitle.value;
let inputTextValue = inputText.value;
checkPost()
if (!checkPost) {return}
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: inputTitleValue,
        body: inputTextValue,
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => addPost(json))
    .catch((error) => {
        console.error("Ошибка", error);
    });
}

button.addEventListener('click', postPosts);