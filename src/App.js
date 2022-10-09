// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 9.2D Dev@Deakin Subscriptions
// Task 8.1D: Find Question Page
// (combined with) Task 7.1P: Login and Registraion Page
// (and) Task 5.1C: New Post Page
// (and) Task 4.1P: Home Page

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import "@stripe/stripe-js";

import HeaderFooter from './HeaderFooter';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import Profile from './Profile';

import Plan from './routes/Plan';
import Success from './routes/Success';
import Cancel from './routes/Cancel';

import Post from './routes/Post';
import FindArticle from './routes/FindArticle';
import FindQuestion from './routes/FindQuestion';

function App() {
  return (
    <div>
      <Routes>

        {/* <Route path="/" element={<Header />}> */}
        <Route path="/" element={<HeaderFooter />}>

        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUpPage/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/plan" element={<Plan/>} />
        <Route path="/plan/success" element={<Success/>} />
        <Route path="/plan/cancel" element={<Cancel/>} />

        <Route path="/post" element={<Post/>} />
        <Route path="/articles" element={<FindArticle/>} />
        <Route path="/questions" element={<FindQuestion/>} />


        </Route>

      </Routes>

    </div>
  );
}

export default App;