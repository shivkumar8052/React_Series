import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/home/Home.jsx'
import AboutUs from './Components/aboutUs/AboutUs.jsx'
import Contact from './Components/contact/Contact.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import User from './Components/user/User.jsx'

//Creating Router Method 1...........
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element :<Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <AboutUs />,
//       },
      
//       {
//         path:"contact",
//         element: <Contact />
//       },

//       {
//         path: "github",
//         element:<Github />
//       }
//     ]
//   }
// ])

// Creating Router method 2..........
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element = {<Home/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='about' element = {<AboutUs/>}/>
      <Route
       path='github'
       loader = {githubInfoLoader}
       element = {<Github/>}
        />
      <Route path='user/:userId' element = {<User/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router = {router} />
  </StrictMode>,
)
