import { FaEye, FaRegTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const UserData = ({ data }) => {
    const navigate = useNavigate()

    return (
        <div className="user-data">
            <p className="name">{data.personal.name}</p>
            <p className="cpf">{data.personal.cpf}</p>
            <p className="birth-date">{data.address.cep}</p>
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