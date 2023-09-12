import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
      <BrowserRouter>
          <Routes>
              <Route path="/personal-profile/" element={<App/>}/>
              <Route path="/personal-profile/bio" element={<BiographyPage/>}/>
              <Route path="/personal-profile/education" element={<EducationPage/>}/>
              <Route path="/personal-profile/experience" element={<WorkPage/>}/>
              <Route path="/personal-profile/qualities" element={<QualitiesPage/>}/>
              <Route path="/personal-profile/skills" element={<SkillsPage/>}/>
              <Route path="/personal-profile/development" element={<DevelopmentPage/>}/>
              <Route path="/personal-profile/activities" element={<ActivitiesPage/>}/>
              <Route path="/personal-profile/hobbies" element={<HobbiesPage/>}/>
              <Route path="/personal-profile/contact" element={<ContactPage/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
