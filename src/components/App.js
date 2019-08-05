import React from 'react';
import Navbar from './navbar/Navbar';
import NameHeader from './header/NameHeader';
import CyclingWord from './header/CyclingWord';
import Quote from './header/Quote';
import AboutContainer from './about/AboutContainer';
import ProjectContainer from './project/ProjectContainer';

const App = () => {
  return (
    <div className="site-container">
      <Navbar />
      <NameHeader />
      <CyclingWord />
      <Quote />
      <AboutContainer />
      <ProjectContainer />
    </div>
  );
};

export default App;
