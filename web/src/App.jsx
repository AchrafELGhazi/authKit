import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';


function App() {
  return (
    <Router>
      <div className='min-h-screen bg-[#080B14] text-white font-sans'>
        <Header />
        <main className='container mx-auto px-4 py-12 pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/secret' element={<Secret />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
