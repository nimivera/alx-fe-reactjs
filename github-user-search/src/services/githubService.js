import axios from 'axios';

const searchUsers = async (query, page = 1) => {
  try {
    const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

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

export { searchUsers, constructQuery };