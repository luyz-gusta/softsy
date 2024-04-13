import { useContext, useEffect, useState } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"
import axios from "axios"
import DropdownBank from "./DropdownBank"
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

const SectionPersonal = (props) => {
    const {
        name, setName,
        phone, setPhone,
        birth, setBirth,
        email, setEmail,
        cpf, setCpf,
        bank, setBank,
        cpfResponsible, setCpfResponsible
    } = useContext(DataContext)

    const [session, setSession] = useState(props.session)

    useEffect(() => {
        axios.get(`https://brasilapi.com.br/api/banks/v1`).then(response => {
            setBank(response.data)
        }).catch(error => {
            alert("Morreu")
        })
    }, [])

    const handleChangeName = (event) => {
        let value = event.target.value

        if (!/\d/.test(value)) {
            setName(value);
        }
    }

    return (
        <section className="personal-data">
            <h2>Dados Pessoais</h2>
            <div className="box-inputs">
                <InputData
                    forLabel="nome"
                    label="Nome"
                    placeHolder="Digite o nome (Ex:João Vitor)"
                    value={name}
                    disable={props.session}
                    onChange={handleChangeName}
                    required={true}
                    length={"200"}
                />
                <InputMask
                    mask={"(99) 99999-9999"}
                    forLabel="telefone"
                    label="Telefone"
                    placeHolder="Digite o número de telefone ((99) 99999-9999)"
                    value={phone}
                    disable={session}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <InputMask
                    mask={"99/99/9999"}
                    forLabel="dataNascimento"
                    label="Data de Nascimento"
                    placeHolder="Digite a data de nascimento (DD/MM/AAAA)"
                    value={birth}
                    disable={session}
                    onChange={(e) => {
                        setBirth(e.target.value)
                    }}
                    required={true}
                />
                <InputData
                    forLabel="email"
                    label="Email"
                    placeHolder="Digite o email (xxxx@gmail.com)"
                    value={email}
                    disable={session}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputMask
                    mask={"999.999.999-99"}
                    forLabel="cpf"
                    label="CPF"
                    placeHolder="Digite o cpf (000.000.000-00)"
                    value={cpf}
                    disable={session}
                    onChange={(e) => setCpf(e.target.value)}
                    required={true}
                />
                <DropdownBank
                    forLabel="banco"
                    label="Banco"
                    banks={bank}
                />
            </div>
        </section>
    )
}

export default SectionPersonal