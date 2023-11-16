import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Live from "./components/Live";
import Push from "./components/Push";
import Note from "./components/Note";
import Link from "./components/Link";
import Shop from "./components/Shop";
import Packs from "./components/Packs";
import Help from "./components/Help";
// import More from "./components/More";
import Trial from "./components/Trial";
import Login from "./components/Login";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/live" element={<Live/>}/>
            <Route path="/push" element={<Push/>}/>
            <Route path="/note" element={<Note/>}/>
            <Route path="/link" element={<Link/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/packs" element={<Packs/>}/>
            <Route path="/help" element={<Help/>}/>
            {/* <Route path="/more" element={<More/>}/> */}
            <Route path="/trial" element={<Trial/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
