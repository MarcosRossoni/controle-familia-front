import {Cidade} from "./Cidade.ts";

export type Usuario = {
    idUsuario?: number
    dsNome?: string
    dsEmail?: string
    dsTelefone?: string
    dtNascimento?: string
    dsCpf?: string
    dsSenha?: string
    fgAtivo?: boolean
    dtCadastro?: string
    dtAlteracao?: string
    dsEndereco?: string
    numPredial?: number
    dsBairro?: string
    dsComplemento?: string
    cidade?: Cidade
}