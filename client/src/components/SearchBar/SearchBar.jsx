import { Box } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setNameFilter } from '../../redux/actions'
import './SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch(); //hoks
  const [name, setName] = useState(" "); //estado local

  function handleInputChange(e) {
    e.preventDefault();
    dispatch(setNameFilter(e.target.value))
  };


  // ESTA FUNCION VA O NO?
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  };

  return (
<<<<<<< HEAD
    <>
      <nav className="navbar bg-body-tertiary divSearch">
        <div className="container-fluid">
          <form class="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              nChange={(e) => { handleInputChange(e) }}
            />
            <button
              className="btn btn-outline-success botonBuscar"
              type="submit"
              onClick={(e) => { handleSubmit(e) }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
=======
    <form role="search">

      <Box display="d-flex" alignItems="center" width="300px">
        <input
          type="search"
          className="form-control"
          style={{
            height: "30px"
          }}
          placeholder="Buscar"
          aria-label="Search"
          onChange={(e) => { handleInputChange(e) }}
        />
        <button
          className="btn botonBuscar"
          type="submit"

          onClick={(e) => { handleSubmit(e) }}
        >
          <GridSearchIcon fontSize="medium" onClick={(e) => { handleSubmit(e) }} />
        </button>
      </Box>
    </form>
>>>>>>> 3e2d8b921bdf142a3d55f15f603a26d7a5fe88ce
  );
}
