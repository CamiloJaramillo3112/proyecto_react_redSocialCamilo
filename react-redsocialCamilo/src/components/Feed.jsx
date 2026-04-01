import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import CreatePost from "./CreatePost";
import Post from "./Post";

function Feed() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <CreatePost />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;