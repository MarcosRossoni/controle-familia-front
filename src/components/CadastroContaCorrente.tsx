import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {ContaBancaria} from "../types/ContaBancaria.ts";
import {Button} from "primereact/button";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";

const CadastroContaCorrente = () => {
    const [dsNome, setDsNome] = useState<string>("")
    const [dsBanco, setDsBanco] = useState<string>("")
    const [conta, setConta] = useState<number | null>()
    const [agencia, setAgencia] = useState<number | null>()

    const createContaBancaria = async(e: React.FormEvent) => {
        e.preventDefault()

        const data: ContaBancaria = {
            dsDescricao: dsNome,
            dsBanco: dsBanco,
            numConta: conta?.toString(),
            numAgencia: agencia?.toString()
        }

        console.log(data)
    }

    return (
        <div className="surface-50 border-round shadow-5 surface-card p-1 m-2">
            <h2 className="text-center font-bold">Conta Bancaria</h2>
            <div className="formgrid grid m-2"
                 onSubmit={(e: React.FormEvent): Promise<void> => createContaBancaria(e)}>
                <div className="field col-12 md:col-6">
                    <span className="p-float-label">
                        <InputText id="dsNome" value={dsNome}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDsNome(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="dsNome">Nome da Conta</label>
                    </span>
                </div>
                <div className="field col-12 md:col-6">
                    <span className="p-float-label">
                        <InputText id="banco" value={dsBanco}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDsBanco(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="banco">Banco</label>
                    </span>
                </div>
                <div className="field col-12 md:col-6">
                    <span className="p-float-label">
                        <InputNumber id="conta" value={conta}
                                     onValueChange={(e: InputNumberValueChangeEvent) => setConta(e.value)}
                                     className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="conta">Num Conta</label>
                    </span>
                </div>
                <div className="field col-12 md:col-6">
                    <span className="p-float-label">
                        <InputNumber id="agencia" value={agencia}
                                     onValueChange={(e: InputNumberValueChangeEvent) => setAgencia(e.value)}
                                     className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="agencia">Num Agencia</label>
                    </span>
                </div>
                <div className="field col-12 text-center">
                    <Button label="Submit"/>
                </div>
            </div>
        </div>
    );
};

export default CadastroContaCorrente;