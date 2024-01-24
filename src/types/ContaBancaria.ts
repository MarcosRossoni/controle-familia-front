import {Usuario} from "./Usuario.ts";

export type ContaBancaria = {
    idContaBancaria?: number | any
    dsDescricao?: string | any
    dsBanco?: string | any
    numConta?: string | any
    numAgencia: string | any
    fgContaBancaria?: number | any
    vlSaldoIncial?: number | any
    vlSaldoAtual?: number | any
    dtUltimaMovimentacao?: string | any
    usuarioCadastro?: Usuario
    usuarioMovimentacao?: Usuario
}