// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 8.1D: Find Question Page
// (combined with) Task 7.1P: Login and Registraion Page
// (and) Task 5.1C: New Post Page
// (and) Task 4.1P: Home Page

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import HeaderFooter from './HeaderFooter';
import Header from './Header';
import Footer from './Footer';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import Profile from './Profile';
import Post from './routes/Post';
import FindArticle from './routes/FindArticle';
import FindQuestion from './routes/FindQuestion';
import Newsletter from './Newsletter';

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

        <Route path="/post" element={<Post/>} />
        <Route path="/articles" element={<FindArticle/>} />
        <Route path="/questions" element={<FindQuestion/>} />


        </Route>



        {/* <Route path="/" element={<Footer />} /> */}

      </Routes>

    </div>
  );
}

export default App;
// my bash:  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
// hah