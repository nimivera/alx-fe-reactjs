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
    // existing JSX code
  );
}

export default Search;