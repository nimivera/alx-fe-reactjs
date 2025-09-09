import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is content for post with ID: {postId}</p>
    </div>
  );
}
