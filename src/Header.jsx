// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header (props) {
    return (
        <div className='headerDiv'>

            <nav className='topNav'>

                {/* <h3>The AI Forum</h3> */}
                <Link className='link' to="/"><b>The AI Forum</b></Link>

                <div className='searchBar'>
                    <form>
                        <input type='text' placeholder='Search ...' />
                    </form>

                </div>

                <Link className='link' to="questions">Questions</Link>

                <Link className='link' to="articles">Articles</Link>

                {/* <a href="post">Post</a> */}
                <Link className='link' to="post">Post</Link>

                {/* <a href="login">Login</a> */}
                <Link className='link' to="login">Login</Link>

            </nav>

            <br /><br />

            <div className='headerImage'>
                 <img src='https://www.amazing7.com/images/transformation-of-web-designing.jpg' 
                alt='Research and Development Header' />

            </div>

            {/* <Outlet /> */}

            <br />
            <br />

        </div>
    );
}

export default Header;