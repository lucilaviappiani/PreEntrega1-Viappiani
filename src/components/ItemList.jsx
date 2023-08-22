import Item from "./Item"

//recibe como prop a productos (filtrados) de ItemListContainer y los mapea. Por cada iteración renderiza un nuevo componente.
const ItemList = ({productos}) => {
  return (
    <div className="ItemListContainer">
      {productos.map((p) => {
        return(
        <Item
        id= {p.id}
        key={p.nombre}
        name= {p.nombre}
        description= {p.description}
        price= {p.price}
        stock={p.stock}
        img={p.img}
        img2={p.img2}
        img3={p.img3}

        />
        )
      })
    }
    </div>
  )
}

export default ItemList