import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = (props) => {

  const userData = useContext(UserContext);

    return (
      <div>

        <h1>{props.name}</h1>
        <p>{userData.name}</p>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
}

export default UserProfile