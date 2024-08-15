import React from 'react';
import '../../css/homepage.css';
import SlideShow from './HomePageSlider/SlidShow';
import CategoryBoxes from './CategoryBoxes';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Travel Sphere</h1>
      <div className='container'><SlideShow /></div><br /><br />
      <CategoryBoxes />
    </>
  );
};

export default HomePage;
