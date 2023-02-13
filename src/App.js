import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import About from "./Pages/About";
import ContactForm from "./Pages/ContactForm";
import EduTech from "./Pages/EduTech";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
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
            <Route path="/education" element={<EduTech />} />
        <Route path="/work" element={<WorkExperience />} /> 
        <Route path="/projects" element={<Projects />}></Route>
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
