import { useContext } from "react"
import Button from "./Button"
import { DataContext } from "../assets/contexts/DataContext"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const BoxButton = ({ disable }) => {
    const navigate = useNavigate()
    const { generateJson } = useContext(DataContext)

    const createUser = () => {
        let jsonUser = generateJson()
        if (jsonUser) {
            let listStorage = localStorage.getItem("salvedUser")
            let list = []
            if (listStorage.length >= 1) {
                list = JSON.parse(listStorage)
                list.push(jsonUser)
                localStorage.setItem('salvedUser', JSON.stringify(list))
                Swal.fire({
                    icon: "success",
                    title: "Cadastro realizado com sucesso",
                })
            } else {
                list.push(jsonUser)
                localStorage.setItem('salvedUser', JSON.stringify(list))
                Swal.fire({
                    icon: "sucess",
                    title: "Cadastro realizado com sucesso",
                })
            }
            navigate('/')
        }
    }

    return (
        <div className="box-btn">
            <Button text={disable ? "Voltar" : "Cancelar"} onClick={() => navigate('/')} />
            {disable ? '' : <Button text={"Salvar"} onClick={() => { createUser() }} />}
        </div>
    )
}

export default BoxButton