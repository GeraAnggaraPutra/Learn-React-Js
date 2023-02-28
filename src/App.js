// import Beranda from './Components/Class/Beranda';
import AboutComp from './Components/Fungsional/AboutComp';
import HomePage from './Components/Fungsional/HomePage';
import NavbarComp from './Components/Fungsional/NavbarComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailComp from './Components/Fungsional/DetailComp';
// import Home from './Components/Fungsional/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/about' element={<AboutComp/>}></Route>
        <Route exact path='/detail/:id' element={<DetailComp/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
