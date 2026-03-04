// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import User from "./User";
import Admin from "./Admin";
// import logo from "./aseets/logo.webp";   
import Project from './project';
import Service from './Services';
import OneBHK from './OneBHK';
import Luxury from "./Luxury";
import Office from "./Office";
import Beach from "./Beach";
import Appointment from "./Appointment";
export default function MainApp() {
  return <>
    <BrowserRouter>
    <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path="/1bhk" element={<OneBHK />} />
        <Route path="/Luxury" element={<Luxury></Luxury>}></Route>
        <Route path='/Office' element={<Office></Office>}></Route>
        <Route path='/Beach' element={<Beach></Beach>}></Route>
        <Route path='/Appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </BrowserRouter>
 </>
}
