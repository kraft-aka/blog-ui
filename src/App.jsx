import './App.scss'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Routes>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='/' element={<Home />}>Home</Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
