import pathBackend from "../../axios/config.js";

const movimentoRestService = {
    async listarMovimentos (query)  {
        return pathBackend.get(`/movimento/list-movimento${query}`)
    },

    async findById (idMovimento)  {
        return pathBackend.get(`/movimento/${idMovimento}`)
    },

    async cadastroMovimento (movimento)  {
        return pathBackend.post("/movimento", movimento)
    },

    async editarMovimento (movimento)  {
        return pathBackend.put("/movimento", movimento)
    }
}

export default movimentoRestService;