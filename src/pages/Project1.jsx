
import React from 'react'
//import {Route,Routes} from 'react-router'
//import { useState } from 'react'

import '../App.css'
//import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.jsx'
import Faq from '../components/Faq.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Footer from '../components/Footer.jsx'
import Blog from '../components/Blog.jsx'
import BlogData from '../components/BlogData.jsx'
/*import Todo from '../components/Todo.jsx'
import Quiz from './components/Quiz.tsx'
import StepperForm from './components/StepperForm.tsx'
import Home from './pages/Home.jsx'*/

function Project1() {
  /*<Route>
   	<Routes path='/Todo' element={<Todo /> }/>
   	<Routes path='/quizapp' element={<Quiz /> }/>
   	<Routes path='/contact' element={<StepperForm /> }/>
  </Route>*/
	
  return (
    <>
    {/*}<Home />
    <h1 className="text-center bg-slate-500">this</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
     {/* <Todo />
      <Quiz />
      <Navbar />*/}
      <Hero />
      <Blog />
      <FeatureSection/>
      <Faq />
      <NewsLetter />
      <Footer />
      {/*<StepperForm />*/}
      <h1>this</h1>


	</>
	)
}
export default Project1
