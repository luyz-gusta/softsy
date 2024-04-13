import { useContext } from "react"
import { DataContext } from "../assets/contexts/DataContext"
import InputMask from "./InputMask"
import InputData from "./InputData"


const SectionPersonal = (props) => {
    const { name, setName } = useContext(DataContext)
    const { phone, setPhone } = useContext(DataContext)
    const { birth, setBirth } = useContext(DataContext)
    const { email, setEmail } = useContext(DataContext)
    const { cpf, setCpf } = useContext(DataContext)
    const { cpfResponsible, setCpfResponsible } = useContext(DataContext)

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
                    onChange={(e) => setName(e.target.value)}
                />
                <InputMask
                    mask={"(99) 99999-9999"}
                    forLabel="telefone"
                    label="Telefone"
                    placeHolder="Digite o número de telefone ((99) 99999-9999)"
                    value={phone}
                    disable={props.session}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <InputMask
                    mask={"99/99/9999"}
                    forLabel="dataNascimento"
                    label="Data de Nascimento"
                    placeHolder="Digite a data de nascimento ((99) 99999-9999)"
                    value={birth}
                    disable={props.session}
                    onChange={(e) => setBirth(e.target.value)}
                />
                <InputData
                    forLabel="email"
                    label="Email"
                    placeHolder="Digite o email (xxxx@gmail.com)"
                    value={email}
                    disable={props.session}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputMask
                    mask={"999.999.999-99"}
                    forLabel="cpf"
                    label="CPF"
                    placeHolder="Digite o cpf (000.000.000-00)"
                    value={cpf}
                    disable={props.session}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <InputMask
                    mask={"999.999.999-99"}
                    forLabel="cpf"
                    label="CPF"
                    placeHolder="Digite o cpf (000.000.000-00)"
                    value={cpf}
                    disable={props.session}
                    onChange={(e) => setCpf(e.target.value)}
                />
            </div>
        </section>
    )
}

export default SectionPersonal