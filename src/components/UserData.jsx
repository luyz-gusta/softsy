import { FaEye, FaRegTrashAlt } from "react-icons/fa"

const UserData = ({ data }) => {
    return (
        <div className="user-data">
            <p className="name">{data.nome}</p>
            <p className="cpf">{data.cpf}</p>
            <p className="birth-date">{data.cep}</p>
            <div className="action-icons">
                <span id="view" onClick={() => {
                    //sessionStorage.setItem('idPerson', data.id)
                    //navigate('/createperson/view')
                }}><FaEye /></span>
                <span id="delete" onClick={() => { }}><FaRegTrashAlt /></span>
            </div>
        </div>
    )
}


export default UserData