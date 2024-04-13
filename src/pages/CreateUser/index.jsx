import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import '../../assets/styles/createUser.css'
import SectionPersonal from "../../components/SectionPersonal"
import DataProvider from "../../assets/contexts/DataContext"
import SectionAddress from "../../components/SectionAddress"
import Button from "../../components/Button"

const CreateUser = () => {
    const navigate = useNavigate()
    var { session } = useParams()
    const idUser = sessionStorage.getItem('idUser')
    const [status, setStatus] = useState(false)

    // const [name, setName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [birth, setBirth] = useState('')
    // const [email, setEmail] = useState('')
    // const [cpf, setCpf] = useState('')
    // const [cpfResponsible, setCpfResponsible] = useState('')
    // const [bank, setBank] = useState('')

    // const [cep, setCep] = useState('')
    // const [street, setStreet] = useState('')
    // const [city, setCity] = useState('')
    // const [state, setState] = useState('')
    // const [number, setNumber] = useState('')
    // const [complement, setComplement] = useState('')

    useEffect(() => {
        if (session == 'create') {
            session = false
        } else {
            session = true
        }
    })

    return (
        <DataProvider>
            <div className="container-create_user">
                <Header />
                <form className="form-user">
                    <h1>Cadastrar Usuário</h1>
                    <SectionPersonal session={session} />
                    <div className="line"></div>
                    <SectionAddress session={session} />
                    <div className="line"></div>
                    <div className="box-btn">
                        <Button text={"Cancelar"} onClick={() => navigate('/')} />
                        <Button text={"Salvar"} />
                    </div>
                </form>
            </div>
        </DataProvider>
    )
}

export default CreateUser