import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const constructQuery = (username, location, minRepos) => {
    let query = '';

    if (username) {
      query += `${username}`;
    }

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    return query.trim();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchResults(null);

    const query = constructQuery(username, location, minRepos);

    try {
      const results = await searchUsers(query);
      setSearchResults(results.items);
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
      ) : searchResults ? (
        <ul className="list-none mt-4">
          {searchResults.map((user) => (
            <li key={user.id} className="py-2">
              <a
                className="text-lg text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Search;