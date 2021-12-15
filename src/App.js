import './App.css';
import Navbar from './Components/Navbar/Menu/Navbar'
import Banner from './Components/Home/Banner'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/Item/ItemListContainer/ItemListContainer';

function App() {
  return (
      <>
      <Navbar/>
      <Banner greeting = "Bienvenido a Zgames:"/>
      <ItemListContainer/>
      <Footer/>
      </>
  );
}

export default App;
