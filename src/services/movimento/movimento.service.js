import movimentoRestService from "./movimento.rest.service.js";

const movimentoService = {
    async listarMovimentos (query) {
        return movimentoRestService.listarMovimentos(query);
    },

    async findById (idMovimento) {
        return movimentoRestService.findById(idMovimento);
    },

    async cadastroMovimento (movimento) {
        return movimentoRestService.cadastroMovimento(movimento)
    },

    async editarMovimento (movimento) {
        return movimentoRestService.editarMovimento(movimento)
    }
}

export default movimentoService;