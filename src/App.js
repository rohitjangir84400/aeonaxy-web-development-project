import './App.css';
import LandingPage from './pages/landing_page';
import ProfileStepper from './pages/stepper_page';
import Home from './pages/home';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/stepper" element={<ProfileStepper/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
