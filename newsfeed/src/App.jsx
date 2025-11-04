import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Henry Yeoj S. Dela Cruz",
      content: "Ferrari",
      image:
        "https://fansbrands.com/cdn/shop/articles/ferrari_auto_6_047a8f54-bb18-442f-8e62-d7f77d5e0bb7.webp?v=1760400962&width=800",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      author: "Henry Yeoj S. Dela Cruz",
      content: "University of the Assumption",
      image:
        "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/525622336_1211091961058262_2673364536049496629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mYcqwWZs5xkQ7kNvwFJ82Yp&_nc_oc=AdlYCxJY24rvRQ9Bx0MlWthSzhWlQ3FxT1qPdSPrfjI1ufZZuPAd4-i1ObfoRWIsgaA&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=F9VtO1CvLn_UvZP2MbhHxQ&oh=00_AfcgFJfmjzDMuErC1yE1FqfatpTZ8w0yBcuR4A6aeXOc0g&oe=6908B80B",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  const handlePost = () => {
    if (!author || !content) {
      alert("Please fill in both author and content!");
      return;
    }

    const newPost = {
      id: Date.now(),
      author,
      content,
      image,
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setAuthor("");
    setContent("");
    setImage("");
  };

  return (
    <div className="app">
      <h1>News Feed</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      <div className="feed">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <p className="author">{post.author}</p>
            <p className="content">{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
            <p className="timestamp">Created At: {post.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

