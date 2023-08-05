import React from 'react';
import Banner from './Banner';
import Instructors from './Instructors';
import ClassesHome from './ClassesHome';
import Feature from './Feature';
import About from './About';
import useTitle from '../../Shared/useTitle';


const Home = () => {
  useTitle('Home')
    return (
      <div>
        <Banner></Banner>
        <Feature></Feature>
        <Instructors></Instructors>
        <ClassesHome></ClassesHome>
        <About></About>
      </div>
    );
};

export default Home;