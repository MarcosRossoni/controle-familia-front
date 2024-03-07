import React, {useEffect, useState} from 'react';
import {AutoComplete} from "primereact/autocomplete";
import categoriaService from "../../services/categoria.service.js";

const CategoriaAutoComplete = ({categoriaDTO, tipoMovimento}) => {
    const [listCategoria, setListCategoria] = useState([]);
    const [filteredCategoria, setFilteredCategoria] = useState([])
    const [categoria, setCategoria] = useState(null);

    const buscarCategoria = (e) => {
        console.log(e.query, tipoMovimento.code)
        categoriaService.autocompleteCategoria(e.query, tipoMovimento.code)
            .then(function (response) {
                setListCategoria(response.data)
            })
    }

    const addCategoriaDTO = (e) => {
        setCategoria(e)
        listCategoria.filter((item) => {
            if (item.dsNome === e) {
                categoriaDTO(item)
            }
        })
    }

    useEffect(() => {
        let listNomeCategoria = [];
        listCategoria.forEach((item) => {
            let dsNome = item.dsDescricao;
            listNomeCategoria.push(dsNome)
        })
        setFilteredCategoria(listNomeCategoria)

    },[listCategoria])
    return (
        <div>
            <div>
            <span className="p-float-label">
            <AutoComplete id="contaBancaria" value={categoria} suggestions={filteredCategoria} completeMethod={buscarCategoria}
                          onChange={(e) => addCategoriaDTO(e.value)}
                          className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full autocomplete"
                          inputClassName={'w-full autocomplete'}/>
                <label htmlFor="contaBancaria">Categoria</label>
            </span>

            </div>
        </div>
    );
};

export default CategoriaAutoComplete;