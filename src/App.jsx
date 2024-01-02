import './App.scss'
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Write from './pages/Write';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='/privacy' element={<Privacy />}>Privacy</Route>
          <Route path='/terms' element={<Terms />}>Terms</Route>
          <Route path='/write' element={<Write />}>Write</Route>
          <Route path='/contact' element={<Contact />}>Contact</Route>
          <Route path='/login' element={<Login />}>Login</Route>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/:id' element={<Post />}>Post</Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
