import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navigation/>
      <Container><App/></Container>
      <hr/>
      <Container id="bio"><BiographyPage/></Container>
      <hr/>
      <Container id="education"><EducationPage/></Container>
      <hr/>
      <Container id="experience"><WorkPage/></Container>
      <hr/>
      <Container id="qualities"><QualitiesPage/></Container>
      <hr/>
      <Container id="skills"><SkillsPage/></Container>
      <hr/>
      <Container id="development"><DevelopmentPage/></Container>
      <hr/>
      <Container id="activities"><ActivitiesPage/></Container>
      <hr/>
      <Container id="hobbies"><HobbiesPage/></Container>
      <hr/>
      <Container id="contact"><ContactPage/></Container>
      <hr/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
