import React from 'react';

import imgt from '../images/imhome.svg';
import Basecompo from './Basecompo'; 

const Home = () => {
    return (
        <>
         <Basecompo
          name ="Grow your business with"
           img ={imgt} visit = '/service'
            btname = " Get Started " />
        </>
    );
}

export default Home;
