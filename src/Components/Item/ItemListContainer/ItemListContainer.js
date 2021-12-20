
//Importacion setState y useEffect//

import { useState, useEffect } from 'react'

import ItemList from '../ItemList/ItemList'
import ItemListDetail from '../ItemList/ItemListDetail';


const games = [];

class Game {

    constructor(id, img, name, price, stock, category, description) {

        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.description = description;

    }

    
}

//---------------------- Juegos de Ps4----------------------- //

const fifa22 = new Game(1, "https://i.ibb.co/DW1ZM1b/fifa22ps4.png", 'FIFA 22', 7800, 20, 'PLAYSTATION 4', 'Esta edición acerca el juego aún más a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. Con Kylian Mbappé como figura destacada, en esta entrega los jugadores podrán hacer realidad sus sueños en el modo Carrera y llegar más lejos que nunca.')
const godofwar = new Game(2, "https://i.ibb.co/XpGf7WR/godofwar4.png", 'GOD OF WAR', 5000, 10, 'PLAYSTATION 4', 'Esta entrega está protagonizada por Kratos y Atreus, que deberán sobrevivir en un mundo habitado por dioses y criaturas nórdicas que los pondrán a prueba a cada instante. Ambientada en los entornos más increíbles y peligrosos de la saga, los jugadores podrán disfrutar de una apasionante historia.')
const tlofus = new Game(3, "https://i.ibb.co/jLRLHLq/thelastofus2ps4.png", 'THE LAST OF US 2', 6000, 16, 'PLAYSTATION 4', 'Esta entrega se desarrolla cinco años después de la catástrofe, cuando Ellie y Joel viven en una tranquila comunidad de sobrevivientes de Wynoming. Los jugadores serán testigos de un violento evento que interrumpe esa paz y experimentarán un viaje en busca de justicia y venganza.')
const tsubasa = new Game(4, "https://i.ibb.co/kJx1NCj/captaintsubasaps4.jpg", 'CAPITAN TSUBASA', 6500, 10, 'PLAYSTATION 4', 'Este juego de fútbol y acción está basado en la famosa serie de animé, con Óliver y el Nankatsu como principales protagonistas. Los jugadores podrán disfrutar dos increíbles modos de historia: Tsubasa y New Hero, en el que podrán jugar con su propio personaje.')

// ---------------------Juegos de Ps5-----------------------//

const borderlands = new Game(5, "https://i.ibb.co/1nP08bB/borderlands3ps5.jpg", "BORDERLANDS 3", 10000, 10, "PLAYSTATION 5", 'Más allá de Pandora hay nuevos mundos por conocer y los jugadores tendrán la oportunidad de explorar nuevos espacios hostiles y destruidos, urbanos y naturales, llenos de enemigos pero también de armas y artilugios para vencerlos.')
const godofwarps5 = new Game(6, "https://i.ibb.co/0jM9h0g/godofwarps5.png", 'GOD OF WAR', 9800, 10, 'PLAYSTATION 5', 'Esta entrega está protagonizada por Kratos y Atreus, que deberán sobrevivir en un mundo habitado por dioses y criaturas nórdicas que los pondrán a prueba a cada instante. Ambientada en los entornos más increíbles y peligrosos de la saga, los jugadores podrán disfrutar de una apasionante historia.')
const fifa22ps5 = new Game(7, "https://i.ibb.co/3FfbcvL/fifa22ps5.jpg", "FIFA 22", 11000, 25, "PLAYSTATION 5", 'Esta edición acerca el juego aún más a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. Con Kylian Mbappé como figura destacada, en esta entrega los jugadores podrán hacer realidad sus sueños en el modo Carrera y llegar más lejos que nunca.')
const farcryps5 = new Game(8, "https://i.ibb.co/H7B20jK/farcry6ps5.jpg", "FAR CRY 5", 11500, 15, "PLAYSTATION 5", 'En una isla tropical, los jugadores encarnarán a Dani Rojas como hombre o mujer y experimentarán una historia que los llevará de ser un ciudadano reacio a un líder que lucha contra el régimen de Anton, empleando armas, vehículos y animales. En PS5 se harán notar las mejoras gráficas y menores tiempos de carga.')

games.push(fifa22, godofwar, tlofus, tsubasa, borderlands, godofwarps5, fifa22ps5, farcryps5)

function GetList() {

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(games), 2000)
    })

}

function GetItem(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(games), 2000)
    })
    
}



const ItemListContainer = () => {
    
    //Usando useState para obtener el estado con el array//
    const [products, setProducts] = useState([])

    //Usando useEffect para cuando se ejecute la promesa luego setear el estado//

    useEffect(() => {

        const list = GetList() // Recibe la Promise //
        console.log(list)
        list.then(producto => {
            setProducts(producto)
        }, err => { console.log(err) })

    }, [])

    // Pasando el estado por Props

    //Usando useState para obtener el estado con el array para armar el Detail//

    const [items, setItems] = useState([])

    useEffect(()=>{

        const listItem = GetItem() // Recibe la Promise//
        listItem.then(productDetail=>{
            setItems(productDetail)
        }, err => {console.log(err)})

    }, [])

    return (
        <>
        <ItemList products={products}/>
        <ItemListDetail items={items}/>
        </>
    )

    
}


export default ItemListContainer