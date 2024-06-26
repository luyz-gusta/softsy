import { useContext, useEffect, useState } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"
import axios from "axios"
import Swal from "sweetalert2"

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

    const [session, setSession] = useState(props.session)
    const [status, setStatus] = useState(true)

    const viaCep = (event) => {
        const value = event.target.value

        if (value.length == 9) {
            const cepNoFormat = value.replace('-', '')
            axios.get(`https://viacep.com.br/ws/${cepNoFormat}/json/`).then(response => {
                const dataLocation = response.data

                if (dataLocation.erro) {
                    Swal.fire({
                        icon: "error",
                        title: "CEP inserido é inválido",
                        text: "Digite um cep válido",
                    })
                } else {
                    setStreet(dataLocation.logradouro)
                    setCity(dataLocation.localidade)
                    setNeighborhood(dataLocation.bairro)
                    setState(dataLocation.uf)
                }
            }).catch(error => {
                setStatus(true)
                Swal.fire({
                    icon: "warning",
                    title: "Sistema de CEP fora do ar",
                    text: "Digite manualmente os seus de endereço",
                });
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "CEP é inválido",
                text: "Digite um cep válido",
            })
        }
    }

    useEffect(() => {
        if (session) {
            let listStorage = localStorage.getItem("salvedUser")
            let list = []
            list = JSON.parse(listStorage)
            let index = sessionStorage.getItem('idUser')
            let dataUser = list[index]

            setCep(dataUser.address.cep)
            setState(dataUser.address.state)
            setStreet(dataUser.address.street)
            setNeighborhood(dataUser.address.neighborhood)
            setNumber(dataUser.address.number)
            setComplement(dataUser.address.complement)
        }
    }, [])

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
                    onChange={(e) => setCep(e.target.value)}
                    required={status}
                    onBlur={viaCep}
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
                    disable={session}
                    onChange={(e) => setComplement(e.target.value)}
                />
            </div>
        </section>
    )



}

export default SectionAddress