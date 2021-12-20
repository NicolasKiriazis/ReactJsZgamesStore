import '../ItemDetail/ItemDetail.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemListDetail = ({items}) => {
    
    return(
        items.map(item => <ItemDetail key={item.id} item={item}/> )
    )
    
}












export default ItemListDetail