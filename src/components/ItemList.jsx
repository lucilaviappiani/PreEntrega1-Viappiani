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
        cardImage={p.img}
        />
        )
      })
    }
    </div>
  )
}

export default ItemList