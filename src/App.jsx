import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'     
import Todoapp from './pages/todoapp'     
import Apicall from './pages/apicall'     
import Navbar from '../components/Navbar'

function App() {

  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apicall" element={<Apicall />} />
        <Route path="/todoapp" element={<Todoapp />} />

      </Routes>
   </BrowserRouter>
  )
}

export default App
