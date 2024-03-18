import pathBackend from "../axios/config.js";

const movimentoService = {
    async listarMovimentos ()  {
        return pathBackend.get("/movimento/list-movimento")
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

export default movimentoService;