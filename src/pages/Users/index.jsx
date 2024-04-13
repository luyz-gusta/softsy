import Header from "../../components/Header";
import { useEffect, useState } from "react";
import UserData from "../../components/UserData";
import '../../assets/styles/users.css'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [listUsers, setListUsers] = useState([
        {
            nome: "Luiz Gustavo",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Maria eduarda",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Luiz",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Luiz Gustavo",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Maria eduarda",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Luiz",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Luiz Gustavo",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Maria eduarda",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
        {
            nome: "Luiz",
            cpf: "517.802.545.70",
            cep: "06420-256"
        },
    ])
    const navigate = useNavigate()

    useEffect(() => {
        //let list = localStorage.getItem("salvedUser")

        // if (list == undefined || list == null) {
        //     localStorage.setItem("salvedUser", [])
        // } else {
        //     setListUsers(list)
        // }
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