import { useContext, useState } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"
import axios from "axios"

const SectionAddress = (props) => {
    const {
        cep, setCep,
        street, setStreet,
        city, setCity,
        state, setState,
        number, setNumber,
        neighborhood, setNeighborhood,
        complement, setComplement
    } = useContext(DataContext)

    const [session, setSession] = useState(false)
    const [status, setStatus] = useState(true)

    const handleChangeCEP = (event) => {
        const value = event.target.value

        if (value.length == 9) {
            const cepNoFormat = value.replace('-', '')
            axios.get(`https://viacep.com.br/ws/${cepNoFormat}/json/`).then(response => {
                const dataLocation = response.data

                setStreet(dataLocation.logradouro)
                setCity(dataLocation.localidade)
                setNeighborhood(dataLocation.bairro)
                setState(dataLocation.uf)
            }).catch(error => {
                setStatus(true)
            })
        }

        setCep(value)
    }

    return (
        <section className="address-data">
            <h2>Endereço</h2>
            <div className="box-inputs">
                <InputMask
                    mask={"99999-999"}
                    forLabel="cep"
                    label="CEP"
                    placeHolder="Digite o cep (00000-000)"
                    value={cep}
                    disable={session}
                    onChange={handleChangeCEP}
                    required={status}
                />
                <InputData
                    forLabel="logradouro"
                    label="Logradouro"
                    placeHolder="Digite o CEP - logradouro (Avenida Antônio João)"
                    value={street}
                    disable={status}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <InputData
                    forLabel="cidade"
                    label="Cidade"
                    placeHolder="Digite o CEP - cidade (São Paulo)"
                    value={city}
                    disable={status}
                    onChange={(e) => setCity(e.target.value)}
                />
                <InputData
                    forLabel="bairro"
                    label="Bairro"
                    placeHolder="Digite o CEP - bairro (Jardim Silveira)"
                    value={neighborhood}
                    disable={status}
                    onChange={(e) => setNeighborhood(e.target.value)}
                />
                <InputData
                    forLabel="estado"
                    label="Estado"
                    placeHolder="Digite o CEP - estado (PR)"
                    value={state}
                    disable={status}
                    onChange={(e) => setState(e.target.value)}
                />
                <InputData
                    forLabel="numero"
                    label="Numero"
                    placeHolder="Digite o numero (140 ou 141B)"
                    value={number}
                    disable={session}
                    onChange={(e) => setNumber(e.target.value)}
                    required={true}
                />
                <InputData
                    forLabel="complemento"
                    label="Complemento"
                    placeHolder="Digite o complemento (Opcional)"
                    value={complement}
                    disable={complement}
                    onChange={(e) => setComplement(e.target.value)}
                />
            </div>
        </section>
    )



}

export default SectionAddress