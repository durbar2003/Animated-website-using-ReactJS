import React from 'react';
import Common from './Common';
import web from './images/Picture2.webp';
const About=()=>{
    return(
        <>
        <Common name="Welcome to About Page" imgsrc={web} visit="/Contact" btname="Contact Us"/>
        </>);
};
export default About;