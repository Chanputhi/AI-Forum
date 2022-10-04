import React, {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';
import {useNavigate } from 'react-router-dom';

// Use the same CSS file as the login page
import '../LoginPage.css';

const SignUpPage = (props) => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword:''
    });

    const {displayName, email, password, confirmPassword} = contact;

    console.log(contact);

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

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName});
            alert('User created successfully!')
            navigate('/Login');
            
        }
        catch(error){
            console.log('error in creating user', error.message);
            console.log(error);
            alert('Error in creating user. Please try again!');
        }
    }


    return (
        <div className="loginForm">

            <h1>Create Account with AI Forum</h1>

            <label>Name* </label>
            <input className='loginData' type="text" name="displayName" placeholder="Enter your name" 
            onChange = {handleChange} value = {contact.displayName} />

            <label>Email* </label>
            <input className='loginData' type="text" name="email" placeholder="Enter your email"
            onChange= {handleChange} value ={contact.email} />

            <label>Password* </label>
            <input className='loginData' type="password" name="password" placeholder="Enter your password"
            onChange={handleChange} value={contact.password} />

            <label>Confirm Password* </label>
            <input className='loginData' type="password" name="confirmPassword" placeholder="Enter your password again"
            onChange={handleChange} value={contact.confirmPassword} />

            {/* <a href="/">Create</a> */}
            {/* <Link className='link' to="/">Create</Link> */}

            <button onClick={handleSubmit}>Create</button>

    
        </div>
      );
}

export default SignUpPage;