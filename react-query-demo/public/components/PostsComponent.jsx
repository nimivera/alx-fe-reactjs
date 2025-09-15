import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError } = useQuery(
    "posts",
    fetchPosts,
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
