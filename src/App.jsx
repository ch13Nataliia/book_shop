// import React from 'react'

import BestBooks from './components/BestBooks/BestBooks';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />
      <Hero />
      <BestBooks />
    </div>
  );
};

export default App;
