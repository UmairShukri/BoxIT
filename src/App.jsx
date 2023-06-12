import './App.css'
import Calculator from './pages/Calculator'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar';



const router = createBrowserRouter([
  { path: "/", element: <Calculator /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
])



function App() {

  return <RouterProvider router={router} />;



}
export default App
