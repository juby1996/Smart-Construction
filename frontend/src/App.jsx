import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom' ;
import { Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import  './assets/css/style.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* created on 02/06/26 by Juby */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
