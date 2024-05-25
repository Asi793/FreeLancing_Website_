import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/forgotpassword';
import JobList from './components/Hire/listofjobs';
import CompletedJobList from './components/Work/completedjobs';
// import SignupNavbar from './components/Navbar/SignupNavbar';

function App() {
  return (
    <>
      {/* <SignupNavbar /> */}
      <Navbar />
      
      
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/completedjobs" element={<CompletedJobList />} />
              <Route path="/listofjobs" element={<JobList />} />
              {/* Other routes */}
          </Routes>
      
      <Footer />
    </>
  );
  
}

export default App;
