import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import FooterPage from './components/footer.jsx';
import HomePage from './components/Home/homepage';
import AboutPage from './components/About/about.jsx';
import ElectionPage from './components/election.jsx';
import LoginPage from './components/login.jsx';
import RegisterPage from './components/register.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />   
        <Route path='/about' element={< AboutPage/>} />
        <Route path='/election' element={<ElectionPage/>} /> 
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>}/>    
      </Routes>
      <FooterPage />
    </div>
  )
}

export default App;
