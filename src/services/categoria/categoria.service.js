import pathBackend from "../../axios/config.js";

const categoriaService = {
    async autocompleteCategoria (query, fgTipo)  {
        return pathBackend.get(`categoria/buscar-categoria/${query}/${fgTipo}`)
    }
}

export default categoriaService;