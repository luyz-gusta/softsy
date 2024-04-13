import { useContext } from "react"
import Button from "./Button"
import { DataContext } from "../assets/contexts/DataContext"
import { useNavigate } from "react-router-dom"

const BoxButton = () => {
    const navigate = useNavigate()
    const { generateJson } = useContext(DataContext)

    return (
        <div className="box-btn">
            <Button text={"Cancelar"} onClick={() => navigate('/')} />
            <Button text={"Salvar"} onClick={() => {
                let jsonUser = generateJson()
                let listStorage = localStorage.getItem("salvedUser")
                if (listStorage.length < 1) {
                    let list = []
                    list.push(jsonUser)
                    localStorage.setItem('salvedUser', JSON.stringify(list))
                    navigate('/')
                } else {
                    let list = JSON.parse(listStorage)
                    list.push(jsonUser)
                    localStorage.setItem('salvedUser', JSON.stringify(list))
                    navigate('/')
                }
            }} />
        </div>
    )
}

export default BoxButton