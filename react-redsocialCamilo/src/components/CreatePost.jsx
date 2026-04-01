import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { UserContext } from "../context/UserContext";

function CreatePost() {
  const [text, setText] = useState("");
  const { addPost } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);

  const handleSubmit = () => {
    if (!text.trim()) return;
    addPost(text, currentUser);
    setText("");
  };

  return (
    <div className="create-post-box">
      <div className="create-top">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w3-circle"
          style={{ width: "42px", height: "42px", objectFit: "cover" }}
        />

        <input
          className="create-input"
          placeholder={`¿Qué estás pensando, ${currentUser.name}?`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <textarea
        className="create-textarea"
        rows="3"
        placeholder="Escribe tu publicación..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="publish-btn" onClick={handleSubmit}>
        Publicar
      </button>
    </div>
  );
}

export default CreatePost;