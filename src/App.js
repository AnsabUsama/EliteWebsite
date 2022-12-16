import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Home from './Components/homePage/home';
import ServicesPage from './Components/servicesPage/servicesPage';
import EasolPartner from './Components/easolPartner/easol-partner';
import Work from './Components/Work/work';
import AboutUs from './Components/aboutUs/about-us';
import Career from './Components/Careers/career';
import LifeAtEliteTechlogix from './Components/lifeAtEliteTechlogix/lifeAtEliteTechlogix';
import Contact from './Components/Contact/contact';


function App() {
  return (
    <div className="App">
      <Header />

      <Router >
        <Routes>

          <Route path = '/' element = {<Home />}   exact />
          <Route path = '/servicesPage' element = {<ServicesPage />}   />
          <Route path = '/easol-partner' element = {<EasolPartner />}   />
          <Route path = '/work' element = {<Work />}   />
          <Route path = '/about-us' element = {<AboutUs />}   />
          <Route path = '/career' element = {<Career />}   />
          <Route path = '/life-at-elite-techlogix' element = { <LifeAtEliteTechlogix />}   />
          <Route path = '/contact' element = { <Contact />}   />
         
          
          

        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
