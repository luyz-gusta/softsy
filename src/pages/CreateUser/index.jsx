import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import '../../assets/styles/createUser.css'
import SectionPersonal from "../../components/SectionPersonal"
import DataProvider from "../../assets/contexts/DataContext"
import SectionAddress from "../../components/SectionAddress"
import Button from "../../components/Button"
import BoxButton from "../../components/BoxButton"

const CreateUser = () => {
    const navigate = useNavigate()
    let { session } = useParams()
    const idUser = sessionStorage.getItem('idUser')

    return (
        <DataProvider>
            <div className="container-create_user">
                <Header />
                <form className="form-user">
                    <h1>Cadastrar Usuário</h1>
                    <SectionPersonal session={session == 'create' ? false : true} />
                    <div className="line"></div>
                    <SectionAddress session={session == 'create' ? false : true} />
                    <div className="line"></div>
                    <BoxButton />
                </form>
            </div>
        </DataProvider>
    )
}

export default CreateUser