import "./App.css";
import Header from "./Components/comman/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesHome from "./Components/AllCourses/CoursesHome";
import Team from "./Components/Team/Team";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/courses" element={<CoursesHome />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/journal" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
