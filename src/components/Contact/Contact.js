import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Contact = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            Name : {loggedInUser.name}
        </div>
    );
};

export default Contact;