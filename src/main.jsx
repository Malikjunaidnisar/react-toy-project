
import { StrictMode } from 'react'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import Todo from './components/Todo.jsx'
import Quiz from './components/Quiz.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter ,RouterProvider,createBrowserRouter} from 'react-router'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
	{
		path:"/",
		Component : Layout,
		children:[
			{
				path:'/',
				element:<Home />
			},
			{
				path:'/about',
				element:<About />
			},
			{
				path:'/contact',
				element:<Contact />
			},
			{
				path:'/todo',
				element:<Todo />
			},
			{
				path:'/quizapp',
				element:<Quiz />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	//<BrowserRouter >
 // <StrictMode>
   // <App />
  //</StrictMode>,
	//</BrowserRouter >
	<RouterProvider router={router} />
)
