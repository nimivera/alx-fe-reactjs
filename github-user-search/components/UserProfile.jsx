
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [username]);

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} />
          <p>
            <a href={userData.html_url}>View on GitHub</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;