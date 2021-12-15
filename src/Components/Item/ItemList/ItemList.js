import Item from '../Item/Item'


// Recibe las Props//
const ItemList = ({ products }) => {

    return (
        //Pasando la prop a Item//
        <div>

            {products.map(product => <Item key={product.id} product={product} />)}
            
            
        </div>
    )

}

export default ItemList