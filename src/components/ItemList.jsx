import Item from "./Item"


const ItemList = ({productos}) => {
  return (
    <div className="ItemListContainer">
      {productos.map((p) => {
        return(
        <Item
        key= {p.id}
        name= {p.nombre}
        description= {p.description}
        stock={p.stock}
        />
        )
      })
    }
    </div>
  )
}

export default ItemList