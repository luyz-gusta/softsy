import { useContext, useEffect, useState } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"
import axios from "axios"
import DropdownBank from "./DropdownBank"
import { set } from "date-fns"
import Swal from "sweetalert2"
import moment from "moment"

const SectionPersonal = (props) => {
    const {
        name, setName,
        phone, setPhone,
        birth, setBirth,
        email, setEmail,
        cpf, setCpf,
        bank, setBank,
        cpfResponsible, setCpfResponsible,
        over18, setOver18
    } = useContext(DataContext)

    const [listBank, setListBank] = useState([])
    const [session, setSession] = useState(props.session)
    const [bankValue, setBankValue] = useState('Escolha um banco')

    useEffect(() => {
        if (session) {
            let listStorage = localStorage.getItem("salvedUser")
            let list = []
            list = JSON.parse(listStorage)
            let index = sessionStorage.getItem('idUser')
            let dataUser = list[index]

            setName(dataUser.personal.name)
            setPhone(dataUser.personal.phone)
            setBirth(dataUser.personal.birth)
            setEmail(dataUser.personal.email)
            setCpf(dataUser.personal.cpf)
            setCpfResponsible(dataUser.personal.cpfResponsible)
            setBankValue(dataUser.personal.bank)


            if (dataUser.personal.cpfResponsible != '') {
                setOver18(false)
            }

        } else {
            axios.get(`https://brasilapi.com.br/api/banks/v1`).then(response => {
                setListBank(response.data)
            }).catch(error => {
                alert("Morreu")
            })
        }
    }, [])

    const handleChangeName = (event) => {
        let value = event.target.value

        if (!/\d/.test(value)) {
            setName(value);
        }
    }

    const handleChangeBank = (value) => {
        setBank(value)
    }

    const handleChangeBirth = (event) => {
        let value = event.target.value
        const momentDate = moment(value, "DD/MM/YYYY")
        if (!momentDate.isValid()) {
            Swal.fire({
                icon: "error",
                title: "A Data de nascimento inserida é inválida"
            })
            setOver18(true)
        } else {
            const age = moment().diff(momentDate, "years")
            if (age > 99) {
                Swal.fire({
                    icon: "error",
                    title: "A Data de nascimento inserida é inválida",
                    text: "Você tem mais de 99 anos.",
                })
                setOver18(true)
            } else if (momentDate.isAfter(moment(), "day")) {
                Swal.fire({
                    icon: "error",
                    title: "A Data de nascimento inserida é inválida",
                    text: "A data de nascimento não pode ser posterior à data de hoje.",
                })
                setOver18(true)
            } else if (age < 18) {
                setOver18(false)
            } else {
                setOver18(true)
            }
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
                    onBlur={handleChangeBirth}
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
                    banks={listBank}
                    disable={session}
                    onSelect={handleChangeBank}
                    bankValue={bankValue}
                />{
                    over18 ? ''
                        : <InputMask
                            mask={"999.999.999-99"}
                            forLabel="cpf"
                            label="CPF do Responsável"
                            placeHolder="Digite o cpf do responsável (000.000.000-00)"
                            value={cpfResponsible}
                            disable={session}
                            onChange={(e) => setCpfResponsible(e.target.value)}
                            required={true} />
                }
            </div>
        </section>
    )
}

export default SectionPersonal