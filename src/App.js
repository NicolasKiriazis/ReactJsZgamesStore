import './App.css';
import Navbar from './Components/Navbar/Menu/Navbar'
import Banner from './Components/Home/Banner'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/Item/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/category/playstation4" element={ItemListContainer}>
      <Route exact path="/category/playstation5" element={ItemListContainer}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
