import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser as userRegular} from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Software from './Pages/Software';
import Web from './Pages/Web';
import PageNotFound from './Pages/PageNotFound';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/software' element={<Software />}></Route>
      <Route path='/web' element={<Web />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
