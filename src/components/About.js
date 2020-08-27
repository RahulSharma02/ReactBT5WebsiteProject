import React from 'react';
import imgt from '../images/imabout.svg'
import Basecompo from './Basecompo'; 

const About = () => {
    return (
        <>
        <Basecompo  
            name ="Welcome to the About page"
            img ={imgt}
            visit = '/contact'
            btname = "Contact Now"/>
        </>
    );
}

export default About;
