import React, { useState } from 'react';
import { searchUsers, constructQuery } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchResults(null);
    setPage(1);

    const query = constructQuery(username, location, minRepos);

    try {
      const results = await searchUsers(query, page);
      setSearchResults(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    const query = constructQuery(username, location, minRepos);
    try {
      const nextPage = page + 1;
      const results = await searchUsers(query, nextPage);
      setSearchResults((prevResults) => ({
        ...results,
        items: [...prevResults.items, ...results.items],
      }));
      setPage(nextPage);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub user"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : error ? (
        <p className="text-center mt-4 text-red-500">Looks like we cant find the user</p>
      ) : (
        searchResults && searchResults.items && searchResults.items.length > 0 && (
          <ul className="list-none mt-4">
            {searchResults.items.map((user) => (
              <li key={user.id} className="py-2 border-b border-gray-200">
                <a
                  className="text-lg text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.login}
                </a>
                <p>Location: {user.location}</p>
                <p>Repositories: {user.public_repos}</p>
              </li>
            ))}
            {searchResults.total_count > searchResults.items.length && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </ul>
        )
      )}
    </div>
  );
}

export default Search;