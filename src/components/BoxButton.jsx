import { useContext } from "react"
import Button from "./Button"
import { DataContext } from "../assets/contexts/DataContext"
import { useNavigate } from "react-router-dom"

const BoxButton = () => {
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
            } else {
                list.push(jsonUser)
                localStorage.setItem('salvedUser', JSON.stringify(list))
            }
            navigate('/')
        }
    }

    return (
        <div className="box-btn">
            <Button text={"Cancelar"} onClick={() => navigate('/')} />
            <Button text={"Salvar"} onClick={() => { createUser() }} />
        </div>
    )
}

export default BoxButton