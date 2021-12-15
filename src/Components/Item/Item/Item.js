import '../Item/Item.css'


const Item = ({ product }) => {

    return (

        <div className="contenedor">
            <div className="producto">
                <div>
                    <img src={product.img} alt={product.name} className="imagen"></img>
                </div>
                <div>
                    <p>{product.name} </p>
                    <p>{"$" + product.price} </p>
                </div>
            </div>
        </div>

    )


}

export default Item