import React, {useState} from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

function HomePage() {
    return (
        <div>
          {/* <Header /> */}

          <Main />
    
          <Newsletter />
    
          {/* <Footer /> */}
    
        </div>
      );
}

export default HomePage;