const API_URL = "http://localhost:3000/posts";

const postList = document.getElementById("postList");
const postTitle = document.getElementById("postTitle");
const postMeta = document.getElementById("postMeta");
const postImage = document.getElementById("postImage");
const postContent = document.getElementById("postContent");
const addPostBtn = document.getElementById("addPostBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");

let currentPostId = null;
let isEditing = false;

function loadPosts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      postList.innerHTML = "";
      data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `${post.title} – ${post.author} • ${post.date || ""}`;
        li.onclick = () => showPost(post);
        postList.appendChild(li);
      });
    })
    .catch(err => {
      postList.innerHTML = "<li>Error loading posts.</li>";
      console.error(err);
    });
}

function showPost(post) {
  currentPostId = post.id;
  postTitle.textContent = post.title;
  postMeta.textContent = `By ${post.author} • ${post.date || ""}`;
  postContent.textContent = post.content;

  if (post.image) {
    postImage.src = post.image;
    postImage.alt = post.title || "Post image";
    postImage.style.display = "block";
  } else {
    postImage.src = "";
    postImage.alt = "";
    postImage.style.display = "none";
  }
}

addPostBtn.onclick = () => {
  const newPost = {
    title: titleInput.value,
    author: authorInput.value,
    image: imageInput.value,
    content: contentInput.value,
    date: new Date().toISOString().split("T")[0]
  };

  if (!newPost.title || !newPost.author || !newPost.content) {
    alert("Title, author, and content are required.");
    return;
  }

  if (isEditing && currentPostId) {
    fetch(`${API_URL}/${currentPostId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(() => {
        loadPosts();
        resetForm();
      })
      .catch(err => alert("Failed to update post."));
  } else {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(() => {
        loadPosts();
        resetForm();
      })
      .catch(err => alert("Failed to add post."));
  }
};

editBtn.onclick = () => {
  if (!currentPostId) return;
  titleInput.value = postTitle.textContent;
  authorInput.value = postMeta.textContent.split("•")[0].replace("By", "").trim();
  imageInput.value = postImage.style.display !== "none" ? postImage.src : "";
  contentInput.value = postContent.textContent;
  addPostBtn.textContent = "Update Post";
  isEditing = true;
};

deleteBtn.onclick = () => {
  if (!currentPostId) return;
  fetch(`${API_URL}/${currentPostId}`, { method: "DELETE" })
    .then(() => {
      loadPosts();
      clearPostDetail();
      resetForm();
    })
    .catch(err => alert("Failed to delete post."));
};

function resetForm() {
  titleInput.value = "";
  authorInput.value = "";
  imageInput.value = "";
  contentInput.value = "";
  addPostBtn.textContent = "Add Post";
  isEditing = false;
}

function clearPostDetail() {
  postTitle.textContent = "";
  postMeta.textContent = "";
  postImage.src = "";
  postImage.alt = "";
  postImage.style.display = "none";
  postContent.textContent = "";
  currentPostId = null;
}

window.onload = loadPosts;
