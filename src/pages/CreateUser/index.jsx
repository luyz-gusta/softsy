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
                        <Button text={"Salvar"} onClick={() => {

                        }} />
                    </div>
                </form>
            </div>
        </DataProvider>
    )
}

export default CreateUser