import pathBackend from "../axios/config.js";

const movimentoService = {
    async listarMovimentos ()  {
        return pathBackend.get("/movimento/list-movimento")
    }
}

export default movimentoService;