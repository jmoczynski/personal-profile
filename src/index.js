import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./components/Navigation";
import BiographyPage from "./components/BiographyPage";
import EducationPage from "./components/EducationPage";
import WorkPage from "./components/WorkPage";
import QualitiesPage from "./components/QualitiesPage";
import SkillsPage from "./components/SkillsPage";
import DevelopmentPage from "./components/DevelopmentPage";
import ActivitiesPage from "./components/ActivitiesPage";
import HobbiesPage from "./components/HobbiesPage";
import ContactPage from "./components/ContactPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navigation/>
      <HashRouter basename="/personal-profile">
          <Routes>
              <Route path="/home" element={<App/>}/>
              <Route path="/bio" element={<BiographyPage/>}/>
              <Route path="/education" element={<EducationPage/>}/>
              <Route path="/experience" element={<WorkPage/>}/>
              <Route path="/qualities" element={<QualitiesPage/>}/>
              <Route path="/skills" element={<SkillsPage/>}/>
              <Route path="/development" element={<DevelopmentPage/>}/>
              <Route path="/activities" element={<ActivitiesPage/>}/>
              <Route path="/hobbies" element={<HobbiesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
