import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import ContactForm from "./ContactForm";
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import WorkExperience from "./Pages/WorkExperience";



function App() {
  return (
    <div className="App">
      <div className="top">
      <MainPage />

      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/education" element={<Education />} /> 
        <Route path="/work" element={<WorkExperience />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<ContactForm />} /> 
      </Routes>
      </div>

      <div className="bottom">

<Footer />

</div>


    </div>
  );
}

export default App;
