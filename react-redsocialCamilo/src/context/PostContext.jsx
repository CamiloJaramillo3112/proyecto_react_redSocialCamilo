import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

const initialPosts = [
  {
    id: 1,
    author: "John Doe",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    time: "1 min",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://www.w3schools.com/w3images/nature.jpg",
    likes: 0,
    shares: 0,
    comments: [],
  },
  {
    id: 2,
    author: "Jane Doe",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    time: "16 min",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "",
    likes: 0,
    shares: 0,
    comments: [],
  },
];

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPostText, user) => {
    const newPost = {
      id: Date.now(),
      author: user.name,
      avatar: user.avatar,
      time: "Ahora",
      content: newPostText,
      image: "",
      likes: 0,
      shares: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  const likePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const sharePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  const addComment = (postId, commentText, user) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  author: user.name,
                  text: commentText,
                  replies: [],
                },
              ],
            }
          : post
      )
    );
  };

  const replyToComment = (postId, commentId, replyText, user) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        {
                          id: Date.now() + Math.random(),
                          author: user.name,
                          text: replyText,
                        },
                      ],
                    }
                  : comment
              ),
            }
          : post
      )
    );
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        likePost,
        sharePost,
        addComment,
        replyToComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}