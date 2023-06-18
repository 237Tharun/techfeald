import React from 'react';
import Home from './Home';
import Courses from './Courses';
import Login from './login';
import Signup from './signup';
import Aptitude from './Aptitude';
import Reasoning from './Reasoning';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Verbal from './verbal';
import Interview from './interview';
import About from './about';
import Contact from './contact';
import C from './c';
import Java from './java';
import Python from './python';
import Cplus from './c++';
import Reactjs from './reactjs';
const Path =()=>{
    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Courses/Aptitude' element={<Aptitude/>}></Route>
        <Route path='/Courses/Reasoning' element={<Reasoning/>}></Route>
        <Route path='/Courses/Verbal_Ebility' element={<Verbal/>}></Route>
        <Route path='/Courses/c' element={<C/>}></Route>
        <Route path='/Courses/C++' element={<Cplus/>}></Route>
        <Route path='/Courses/Java' element={<Java/>}></Route>
        <Route path='/Courses/React_js' element={<Reactjs/>}></Route>
        <Route path='/Courses/Python' element={<Python/>}></Route>
        <Route path='/Interview_Prep' element={<Interview/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contac_Us' element={<Contact/>}></Route>
       </Routes>
       </BrowserRouter>
    )
}
export default Path;
