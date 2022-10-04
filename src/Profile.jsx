import React from 'react';
import {useState, useEffect} from 'react';
import {getAuth} from 'firebase/auth';
import {useNavigate, Link} from 'react-router-dom';


function Profile (props) {

    const [user, setUser] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect (() => {
        setUser(auth.currentUser);
        // console.log(auth.currentUser);
    }, [])

    const onLoggedOut = () => {
        auth.signOut();
        navigate('/');
    }


    return (
        <div style={{textAlign: "center"}}>
            {user ? 
                <div >

                <h1>Profile Page</h1>
                <h3>Welcome {user.email} </h3>

                </div>

                : "Please Login!"}

                <button type='submit' onClick={onLoggedOut}> Log Out </button>
        </div>
    )



}

export default Profile;