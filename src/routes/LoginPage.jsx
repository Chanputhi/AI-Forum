import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWitGooglePopup,  signinAuthUserWithEmailAndPassword} from '../utils/firebase';
import { UserContext } from '../context/user.context';
import '../LoginPage.css';

const LoginPage = (props) => {

    const navigate = useNavigate();

    const logGoogleUser = async() => {
        const {user} = await signInWitGooglePopup();
        console.log("User", user);
        // const userDocRef = await createUserDocFromAuth(user);
        navigate('/');
    }

    const {setCurrentUser} = useContext(UserContext);

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
   
    const {email, password} = contact

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();
        try{
            // const response = await signinAuthUserWithEmailAndPassword(email,password);

            const {user} = await signinAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            console.log(user);
            alert('User logged in successfully!');

            // navigate('/');
            navigate('/profile');
        }
        catch(error){
            console.log('error in login', error.message)
            if(error.code === 'auth/user-not-found'){
                alert('User not found. Please sign up!')
            }
        }
    }

    return (
        <div className="loginForm">

            {/* <a id='signUp'  href="/signUp">Sign Up</a> */}
            <Link id='signUp' className='link' to="/signUp">Sign Up</Link>

            <h1>AI Forum</h1>

            <label>Email:</label>
            <input className='loginData' type="text" name="email" placeholder="Enter your email"
            onChange={handleChange} value={contact.email} />

            <label>Password:</label>
            <input className='loginData' type="password" name="password" placeholder="Enter your password" 
            onChange={handleChange} value={contact.password} />

            {/* <a href="/">Login</a> */}
            {/* <Link className='link' to="/">Login</Link> */}
            <button onClick={handleSubmit}>Login</button>


            {/* <Link className='link' onClick={logGoogleUser} >Login with Google</Link>    */}
            <button onClick={logGoogleUser}>Login with Google</button> 
    
        </div>
      );
}

export default LoginPage;