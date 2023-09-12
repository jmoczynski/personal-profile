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
      <Container><BiographyPage id="bio"/></Container>
      <hr/>
      <Container><EducationPage id="education"/></Container>
      <hr/>
      <Container><WorkPage id="experience"/></Container>
      <hr/>
      <Container><QualitiesPage id="qualities"/></Container>
      <hr/>
      <Container><SkillsPage id="skills"/></Container>
      <hr/>
      <Container><DevelopmentPage id="development"/></Container>
      <hr/>
      <Container><ActivitiesPage id="activities"/></Container>
      <hr/>
      <Container><HobbiesPage id="hobbies"/></Container>
      <hr/>
      <Container><ContactPage id="contact"/></Container>
      <hr/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
