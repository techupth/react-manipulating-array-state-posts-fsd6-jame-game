import initialPost from "./IniPost";
import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState(initialPost);

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleDislike = (index) => {
    const newPosts = [...posts];
    if (newPosts[index].likes > 0) {
      newPosts[index].likes -= 1;
      setPosts(newPosts);
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((item, index) => (
          <div className="post-item" key={index}>
            <div className="post-header">
              <h2>
                {item.title} #{item.id}
              </h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{item.likes}</span>
              </div>
            </div>
            <p className="post-content">{item.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(index)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
