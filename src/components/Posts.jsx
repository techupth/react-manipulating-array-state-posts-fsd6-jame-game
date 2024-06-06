import detail from "./detailPost";
import { useState } from "react";

function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {detail.map((item, index) => {
          const [like, setlike] = useState(item.likes);

          const handleLike = () => {
            setlike(like + 1);
          };
          const handleDislike = () => {
            if (like > 0) {
              setlike(like - 1);
            }
          };
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{like}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={handleLike}>
                  Like
                </button>
                <button className="dislike-button" onClick={handleDislike}>
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
