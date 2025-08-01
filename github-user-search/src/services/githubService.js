import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};