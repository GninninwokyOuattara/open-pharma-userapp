import axios from "axios";

export const getPost = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts;
};
