import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/LoginGroup/Login/Login';
import Register from './Components/LoginGroup/Register/Register';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }></Route>
        
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
