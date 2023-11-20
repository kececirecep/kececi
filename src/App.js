import './App.css';
import Header from './Components/Header'; 
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <div className='container mx-auto'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/projects' element={<Projects/>}/> 
      </Routes>
    </div> 
    <Footer/>
    </>
  );
}

export default App;
