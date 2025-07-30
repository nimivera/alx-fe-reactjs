import React, { useState } from 'react';
import { getUser } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const user = await getUser(username);
      setUserData(user);
    } catch (error) {
      console.error(error);
    }
  };

  // ...
}