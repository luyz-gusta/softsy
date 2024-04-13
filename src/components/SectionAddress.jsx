import { useContext } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"

const SectionAddress = (props) => {
    const { cep, setCep } = useContext(DataContext)
    const { street, setStreet } = useContext(DataContext)
    const { city, setCity } = useContext(DataContext)
    const { state, setState } = useContext(DataContext)
    const { number, setNumber } = useContext(DataContext)
    const { complement, setComplement } = useContext(DataContext)

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
                    disable={props.session}
                    onChange={(e) => setCep(e.target.value)}
                />
                <InputData
                    forLabel="logradouro"
                    label="Logradouro"
                    placeHolder="Digite o CEP - logradouro (Avenida Antônio João)"
                    value={street}
                    disable={true}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <InputData
                    forLabel="cidade"
                    label="Cidade"
                    placeHolder="Digite o CEP - cidade (São Paulo)"
                    value={city}
                    disable={true}
                    onChange={(e) => setCity(e.target.value)}
                />
                <InputData
                    forLabel="estado"
                    label="Estado"
                    placeHolder="Digite o CEP - estado (PR)"
                    value={state}
                    disable={true}
                    onChange={(e) => setState(e.target.value)}
                />
                <InputData
                    forLabel="numero"
                    label="Numero"
                    placeHolder="Digite o numero (140 ou 141B)"
                    value={number}
                    disable={props.session}
                    onChange={(e) => setNumber(e.target.value)}
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