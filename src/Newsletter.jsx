// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';

import './Newsletter.css';

function Newsletter (props) { 

    const handleClick = async() => {
        alert('Thank you for subscribing to our daily insider');
        // await fetch('http://localhost:3000/')
        await fetch('http://localhost:8888/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: document.getElementById('email').value})

        })
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .catch(error => {
            console.error('Error in React:', error);
        })
    }


    return (
        <div className='subscribe'>
            {/* <form class="signUpForm"> */}
                <label>SIGN UP FOR OUR DAILY INSIDER</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"/>

                <button type="submit"
                onClick={handleClick}
                >SUBSCRIBE</button>

            {/* </form> */}


        </div>
    )
}

export default Newsletter;