// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { QuestionProvider } from './context/question.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <UserProvider>
            
            <App />
           
        </UserProvider>
    </BrowserRouter>

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

