import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { UserContext } from "../context/UserContext";

function Post({ post }) {
  const { likePost, sharePost, addComment, replyToComment } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);

  const [commentText, setCommentText] = useState("");
  const [replyInputs, setReplyInputs] = useState({});

  const handleComment = () => {
    if (!commentText.trim()) return;
    addComment(post.id, commentText, currentUser);
    setCommentText("");
  };

  const handleReply = (commentId) => {
    const replyText = replyInputs[commentId];
    if (!replyText || !replyText.trim()) return;

    replyToComment(post.id, commentId, replyText, currentUser);

    setReplyInputs({
      ...replyInputs,
      [commentId]: "",
    });
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt={post.author} className="post-avatar" />

        <div className="post-meta">
          <h4>{post.author}</h4>
          <span>{post.time}</span>
        </div>
      </div>

      <div className="post-text">{post.content}</div>

      {post.image && <img src={post.image} alt="Post" className="post-image" />}

      <div className="post-stats">
        <span>👍 {post.likes} Me gusta</span>
        <span>
          {post.comments.length} comentarios · {post.shares} compartidos
        </span>
      </div>

      <div className="action-row">
        <button className="action-btn" onClick={() => likePost(post.id)}>
          <i className="fa fa-thumbs-up"></i> Me gusta
        </button>

        <button className="action-btn">
          <i className="fa fa-comment"></i> Comentar
        </button>

        <button className="action-btn" onClick={() => sharePost(post.id)}>
          <i className="fa fa-share"></i> Compartir
        </button>
      </div>

      <div className="comment-box">
        <input
          type="text"
          className="comment-input"
          placeholder="Escribe un comentario..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="comment-btn" onClick={handleComment}>
          Comentar
        </button>
      </div>

      {post.comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-text">{comment.text}</div>

          <div className="reply-wrap">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="reply-item">
                <strong>{reply.author}:</strong> {reply.text}
              </div>
            ))}

            <input
              type="text"
              className="reply-input"
              placeholder="Responder comentario..."
              value={replyInputs[comment.id] || ""}
              onChange={(e) =>
                setReplyInputs({
                  ...replyInputs,
                  [comment.id]: e.target.value,
                })
              }
            />

            <button className="reply-btn" onClick={() => handleReply(comment.id)}>
              Responder
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;