// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';

import './Footer.css';


function Footer (props) {
    return (
        <div className='footer'>

            {/* <Outlet /> */}

            <div className='row'>

                <div className="column">
                    <h3>Explore</h3>
                    <a href="/">Home</a>
                    <a href="questions">Questions</a>
                    <a href="articles">Articles</a>
                    <a href="tutorials">Tutorials</a>

                </div>

                <div className="column">
                    <h3>Support</h3>
                    <a href="faqs">FAQs</a>
                    <a href="help">Help</a>
                    <a href="contact">Contact</a>
                    
                </div>

                <div className="column">
                    <h3>Stay Connected</h3>

                    <a href="https://www.facebook.com/">
                        <img src='https://northernriverssportfishing.com.au/wp-content/uploads/2018/02/blue-facebook-social-icon-icon-search-engine-0.png' 
                            alt='Facebook' />
                    </a>

                    <a href="https://www.twitter.com/">
                        <img src='https://cdn-icons-png.flaticon.com/512/124/124021.png' 
                            alt='Twitter' />
                    </a>


                    <a href="https://www.instagram.com/">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hKoA1K_WmZXrGeaeEnXH2pHjpBOmt152mjFOO7JGRQ&s' 
                            alt='Instagram' />
                    </a>

                    
                </div>

            </div>


            <div className="bottomFooter">
                <h3>The AI Forum 2022</h3>
                <a href="policy">Privacy Policy</a>
                <a href="terms">Terms</a>
                <a href="coduct">Code of Conduct</a>


            </div>


        </div>

    );
}

export default Footer;