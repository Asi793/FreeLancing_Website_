import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/forgotpassword';
import ResetPassword from './components/resetpassword';
import JobList from './components/Hire/listofjobs';
import CompletedJobList from './components/Work/completedjobs';
import Lifestyle from './components/LifeStyle/lifestyle';
import GraphicDesign from './components/GraphicDesign/graphicdesign';
import DigitalMarketing from './components/DigitalMarketing/digitalmarketing';
import Data from './components/Data/data';
import CategoriesNavbar from './components/Work/CategoriesNavbar';
import Travel from './components/LifeStyle/Travel/Travel'

// import SignupNavbar from './components/Navbar/SignupNavbar';

function App() {
  return (
    <>
      {/* <SignupNavbar /> */}
      <Navbar />
      
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/completedjobs" element={<CompletedJobList />} />
              <Route path="/listofjobs" element={<JobList />} />
              <Route path="/lifestyle" element={<Lifestyle />} />
              <Route path="/GraphicDesign" element={<GraphicDesign />} />
              <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
              <Route path="/Data" element={<Data />} />
              <Route path="/Travel" element={<Travel />} />
          </Routes>
      
      <Footer />
    </>
  );
  
}

export default App;
