import axios from 'axios';

const githubApiUrl = 'https://api.github.com';

const searchUsers = async (query, page = 1) => {
  try {
    const response = await axios.get(`${githubApiUrl}/search/users`, {
      params: {
        q: query,
        page,
        per_page: 10,
      },
    });
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