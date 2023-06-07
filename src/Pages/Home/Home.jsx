import React from 'react';
import Banner from './Banner';
import Instructors from './Instructors';

const Home = () => {
    return (
        <div className='bg-black'>
           <Banner></Banner>
           <Instructors></Instructors>
        </div>
    );
};

export default Home;