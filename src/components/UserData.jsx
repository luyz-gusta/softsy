import { FaEye, FaRegTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const UserData = ({ data }) => {
    const navigate = useNavigate()

    return (
        <div className="user-data">
            <p className="name">{data.name}</p>
            <p className="cpf">{data.cpf}</p>
            <p className="birth-date">{data.cep}</p>
            <div className="action-icons">
                <span id="view" onClick={() => {
                    sessionStorage.setItem('idUser', data.id)
                    navigate("/create-view/view")
                }}><FaEye /></span>
                <span id="delete" onClick={() => { }}><FaRegTrashAlt /></span>
            </div>
        </div>
    )
}


export default UserData