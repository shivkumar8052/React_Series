import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';
//function.........
 function MyApp(){
  return (
    <h4>My name is shiv kumar yadav and i am currently pursuing B.tech from IET Lucknow.</h4>
  )
 }
 //direct jaisa react convert karta hai vaisa element 
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);

const AnotherFunction = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)



createRoot(document.getElementById('root')).render(
  <App/>

)
