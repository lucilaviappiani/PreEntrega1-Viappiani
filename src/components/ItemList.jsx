import Item from "./Item"

//recibe como prop a productos (filtrados) de ItemListContainer y los mapea. Por cada iteración renderiza un nuevo componente.
const ItemList = ({productos}) => {
  return (
    <div className="ItemListContainer">
      {productos.map((p) => {
        return(
        <Item
        id= {p.id}
        key={p.id}
        name= {p.nombre}
        description= {p.description}
        stock={p.stock}
        cardImage={p.img}
        cardImage2={p.img2}
        cardImage3={p.img3}

        />
        )
      })
    }
    </div>
  )
}

export default ItemList