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



function StoreItems({ currentVideogames }) {
  const dispatch = useDispatch()

  // todos los productos
  const items = useSelector(state => state.items)

  // variables globales para Paginado
  const currentPage = useSelector(state => state.currentPage)
  const itemsPerPage = useSelector(state => state.itemsPerPage)

  // variables globales para filtrado y ordenamiento
  const nameFilter = useSelector(state => state.nameFilter)
  const categoryFilter = useSelector(state => state.categoryFilter)
  const markFilter = useSelector(state => state.marksFilter)
  const sortBy = useSelector(state => state.sortBy);

  // funcion para volver a la pagina inicial (se la aplicará luego de cada filtrado u ordenado)
  const resetCurrentPage = () => dispatch(changePage(1))

  // variable auxiliar para filtrar, ordenar y paginar los items
  let filteredAndSorted = items;

  // Filtrado por categoria
  filteredAndSorted = categoryFilter
    ?
    filteredbyCategory(filteredAndSorted, categoryFilter, resetCurrentPage)
    :
    filteredAndSorted
  console.log("esto filtra categoria", filteredAndSorted)

  // Filtrado por marca
  filteredAndSorted = markFilter
    ?
    filteredbyMarks(filteredAndSorted, markFilter, resetCurrentPage)
    :
    filteredAndSorted
  console.log("esto filtra marca", filteredAndSorted)

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

  // Paginate items
  let currentItems = paginateItems(filteredAndSorted, currentPage, itemsPerPage)

  // Enviar array de botones al paginado
  getNumberButtons(filteredAndSorted, itemsPerPage, dispatch, setNumbersPaginated)

  return (
    <>
      <div className="divG">
        <h1 className="productosT">PRODUCTOS</h1>
        <div className="modelo3">
          {currentItems.length
            ?
            currentItems.map((item) => {
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
            })
            :
            <div>  "No hay productos todavía."</div>
          }
        </div>
        <Footer className='footer2' />
      </div>
    </>

  )
}

export default StoreItems