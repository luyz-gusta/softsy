import { FaEye, FaRegTrashAlt } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

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
                <span id="delete" onClick={() => {
                    Swal.fire({
                        title: "Deseja excluir esse usuário?'",
                        showCancelButton: true,
                        showDenyButton: true,
                        cancelButtonText: 'Não',
                        denyButtonText: `Sim`,
                        showConfirmButton: false
                    }).then((result) => {
                        if (result.isDenied) {
                            let listStorage = localStorage.getItem("salvedUser")
                            let list = []
                            list = JSON.parse(listStorage)
                            list.splice(data.id, 1)
                            localStorage.setItem('salvedUser', JSON.stringify(list))
                            Swal.fire({
                                icon: "success",
                                title: "Usuário excluido com sucesso",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.reload()
                                }
                            })
                        }
                    });
                }}><FaRegTrashAlt /></span>
            </div>
        </div>
    )
}


export default UserData