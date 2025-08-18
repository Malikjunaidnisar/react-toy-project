
//import React from 'react'
//import {Route,Routes} from 'react-router'
//import { useState } from 'react'

import './App.css'
/*import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Faq from './components/Faq.tsx'
import FeatureSection from './components/FeatureSection.tsx'
import NewsLetter from './components/NewsLetter.tsx'
import Footer from './components/Footer.tsx'
import Blog from './components/Blog.tsx'
import BlogData from './components/BlogData.tsx'
import Todo from './components/Todo.tsx'
import Quiz from './components/Quiz.tsx'
import StepperForm from './components/StepperForm.tsx'*/
import Home from './pages/Home.jsx'

function App() {
  /*<Route>
   	<Routes path='/Todo' element={<Todo /> }/>
   	<Routes path='/quizapp' element={<Quiz /> }/>
   	<Routes path='/contact' element={<StepperForm /> }/>
  </Route>*/
	
  return (
    <>
    <Home />
    {/*<h1 className="text-center bg-slate-500">this</h1>
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
      <Navbar />
      <Hero />
      <Blog />
      <FeatureSection/>
      <Faq />
      <NewsLetter />
      <Footer />*/}
      {/*<StepperForm />*/}
      


	</>
	)
}
export default App