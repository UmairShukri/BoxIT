
import './App.css'
import Calculator from './pages/Calculator'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BackgroundSlider from './assets/BackgroundSlider'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element:<Calculator/> },
  { path: "/about", element:<About/> },
  { path: "/contact", element:<Contact/> },
])



function App() {

  return <RouterProvider router ={router}/>;



    // <div className="App " >
    //   <Calculator/>
      
     
    // </div>

}

export default App
