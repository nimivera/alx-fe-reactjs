// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(
    ["posts"], // queryKey
    fetchPosts, // queryFn
    {
      staletime: 5000,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true, // ✅ explicit option
      keepPreviousData: true,     // ✅ explicit option
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
