import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import ContactMePage from './pages/ContactMePage/ContactMePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import  WorkExperiencePage from './pages/WorkExperiencePage/WorkExperiencePage';
//import all of your components to use them


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {
  return (
    <div className="App">
     
     <Router>
      <nav>
        <ul>
          <li><Link to="/" classname='link'>About Me</Link></li>
          <li><Link to="/contactme" className='link'>Contact Me</Link></li>
          <li><Link to="/projects" className='link'>Projects</Link></li>
          <li><Link to="/skills" className='link'>Skills</Link></li>
          <li><Link to="/workexperience" className='link'>Work Experience</Link></li>
          </ul>
        </nav> 
      
     
          <Routes>
            <Route path='/' element={<AboutPage />} />
            <Route path='/contactme' element={<ContactMePage />} />     
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/*' element={<Navigate to='/about' replace/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;