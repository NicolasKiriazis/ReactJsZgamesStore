import Footer from "../Footer/Footer"
import ItemListContainer from "../Item/ItemListContainer/ItemListContainer"
import Navbar from "../Navbar/Menu/Navbar"
import Banner from "./Banner"
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const Home = () => {
    return(
        <>
        
        <Navbar/>
        <Banner greeting={"Bienvenidos a ZGames"} />
        <ItemListContainer/>
        <Footer/>
        
        </>
    )
}

export default Home
