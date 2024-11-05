import { useEffect, useState } from "react";
import { $api } from "../api/api";

type Post = {
  _id: string;
  user_id: string;
  image_url: string;
  caption: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  __v: number;
};

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = () => {
      $api.get("/post/all").then((res) => setPosts(res.data));
    };
    getPosts();
  }, []);

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((item: Post) => (
          <PostItem img={item.image_url} caption={item.caption} />
        ))
      ) : (
        <span>No Posts</span>
      )}
    </ul>
  );
};

const PostItem = ({ caption, img }: { caption: string; img: string }) => {
  return (
    <li>
      <img src={img} alt="" />
      {caption}
    </li>
  );
};

export default PostsList;
