import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    return (
        <div className="cont-detail">
            <div className="container">

                <img src={item.img} alt={item.name} className="img-detail"></img>

                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className= "price" >{"$" + item.price}</p>
                <p> {item.category} </p>
                <p>{"Stock:" + item.stock}</p>

            </div>
        </div>
    )

}

export default ItemDetail