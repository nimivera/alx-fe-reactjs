import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await fetchUserData(username);
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
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