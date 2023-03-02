import React from "react";
import { StoreItem } from "../StoreItem/StoreItem";
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { changePage, setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";
import { filterByName } from "../../hooks/filterByName";
import { filteredbyCategory } from "../../hooks/filterByCategory";
import { filteredbyMarks } from "../../hooks/filterByMarks";
import { sortByPrice } from "../../hooks/sortByPrice";
import { paginateItems } from "../../hooks/paginateItems";
import { getNumberButtons } from "../../hooks/getNumberButtons";
import Footer from "../Footer/Footer";
import { convertLength } from "@mui/material/styles/cssUtils";



function StoreItems({ currentVideogames }) {
  const dispatch = useDispatch()

  // todos los productos
  const items = useSelector(state => state.items)

  // variables globales para Paginado
  const currentPage = useSelector(state => state.currentPage)
  // const itemsPerPage = useState(2)
  const itemsPerPage = useSelector(state => state.itemsPerPage)

  // variables globales para filtrado y ordenamiento
  const nameFilter = useSelector((state) => state.nameFilter);
  const categoryFilter = useSelector((state) => state.categoryFilter);
  const mandofilter = useSelector((state) => state.filtermandos);
  const juegosfilter = useSelector((state) => state.filterjuegos);
  const sortBy = useSelector((state) => state.sortBy);

  // funcion para volver a la pagina inicial (se la aplicará luego de cada filtrado u ordenado)
  const resetCurrentPage = () => dispatch(changePage(currentPage))

  // variable auxiliar para filtrar, ordenar y paginar los items
  let filteredAndSorted = items;

<<<<<<< HEAD
  if (mandofilter[0]) { filteredAndSorted = mandofilter }
  if (juegosfilter[0]) { filteredAndSorted = juegosfilter }
=======
  //   if(mandofilter[0]){filteredAndSorted = mandofilter}
  // if(juegosfilter[0]){filteredAndSorted = juegosfilter}
>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce

  // Filtrado por categoria
  filteredAndSorted = categoryFilter
    ?
    filteredbyCategory(filteredAndSorted, categoryFilter, resetCurrentPage)
    :
    filteredAndSorted

<<<<<<< HEAD
=======
  // Filtrado por marca
  // filteredAndSorted = markFilter
  //   ? filteredbyMarks(filteredAndSorted, markFilter, resetCurrentPage)
  //   : filteredAndSorted;

  // Filtrado por mandos
  // filteredAndSorted = mandofilter
  // ? mandofilter
  // : filteredAndSorted;
>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce

  // Filtrado por nombre
  filteredAndSorted = nameFilter
    ?
    filterByName(filteredAndSorted, nameFilter, resetCurrentPage)
    :
    filteredAndSorted


  // Ordenamiento
  filteredAndSorted = sortBy
    ?
    sortByPrice(filteredAndSorted, sortBy, resetCurrentPage)
    :
    filteredAndSorted


<<<<<<< HEAD
=======

  // filteredAndSorted = mandofilter[0] ?
  // mandofilter : filteredAndSorted

  // filteredAndSorted = juegosfilter[0] ?
  // juegosfilter : filteredAndSorted


>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce
  // Paginate items
  let currentItems = paginateItems(filteredAndSorted, currentPage, itemsPerPage)


  // Enviar array de botones al paginado
  getNumberButtons(filteredAndSorted, itemsPerPage, dispatch, setNumbersPaginated)

  return (
    <>
      {console.log('items: ', items)}
      <div className="divG">
<<<<<<< HEAD
=======

>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce
        <div className="modelo3">
          {items[0]
            ?
<<<<<<< HEAD
            currentItems.map((item) => {
              if (item.isActive) {
                return (
                  <>
                    <Link to={`/products/${item.id}`}>
                    </Link>
                    <div className="modelo">
                      <StoreItem
                        id={item.id}
                        name={item.title}
                        img={item.img}
                        price={item.price}
                        stock={item.stock}
                      />
                    </div>
                  </>
                )
              }
            })
=======
            items.map((item) =>
              // item.isActive ? 
              <>
                <Link to={`/products/${item.id}`}>
                </Link>
                <div className="modelo">
                  <StoreItem
                    id={item.id}
                    name={item.title}
                    img={item.img}
                    price={item.price}
                    stock={item.stock}
                  />
                </div>
              </>
            )
>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce
            :
            <div>  "No hay productos todavía."</div>
          }
        </div>

      </div>
    </>

  )
}

export default StoreItems