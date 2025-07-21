import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Age: 25</p>
      <p>Bio: Loves hiking and photography</p>
    </div>
  );
}