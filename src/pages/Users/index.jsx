import Header from "../../components/Header";
import { useEffect, useState } from "react";
import UserData from "../../components/UserData";
import '../../assets/styles/users.css'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [listUsers, setListUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let listStorage = localStorage.getItem("salvedUser")
        if (listStorage === null) {
            listStorage = []
            localStorage.setItem("salvedUser", JSON.stringify(listStorage))
        } else {
            if (listStorage.length < 1) {
                setListUsers([])
            } else {
                let list = JSON.parse(listStorage)
                setListUsers(list)
            }
        }
    }, [])

    return (
        <div className="users">
            <Header />
            <div className="container-users">
                <h1>Usuários Cadastrados</h1>
                <button onClick={() => navigate("/create-view/create")} className="btn">
                    <strong>Nova Pessoa</strong>
                    <FaPlus />
                </button>
                <div className="list-users">
                    {listUsers.map((user, index) => {
                        user.id = index
                        return (
                            <UserData key={index} data={user} />
                        )
                    })}
                </div>
            </div>
        </div >
    );
}

export default Users