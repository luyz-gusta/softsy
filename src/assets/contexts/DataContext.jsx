import { createContext, useState } from "react";
import { cpfValidator, nameValidator } from "../functions/validators";
import Swal from "sweetalert2";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [cpfResponsible, setCpfResponsible] = useState('')
    const [bank, setBank] = useState('Escolha um banco')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [complement, setComplement] = useState('')
    const [over18, setOver18] = useState(true)

    const generateJson = () => {
        let valueReturn = false

        if (nameValidator(name)) {
            Swal.fire({
                icon: "error",
                title: "Nome inserido é inválido",
                text: "Tem que escrever nome e sobrenome, e até 200 caracteres",
            })
        } else if (!birth || birth.length != 10) {
            Swal.fire({
                icon: "error",
                title: "Data de nascimento é inválida"
            })
        } else if (!cpfValidator(cpf) || cpf == '') {
            Swal.fire({
                icon: "error",
                title: "CPF inserido é inválido",
                text: "Verifica se foi digitado corretamente",
            })
        } else if (phone == '' && email == '') {
            Swal.fire({
                icon: "error",
                title: "Email e Telefone está vázio",
                text: "Insira pelo menos um deles",
            })
        } else if (phone != '' && phone.length < 11) {
            Swal.fire({
                icon: "error",
                title: "Telefone inserido incorretamente"
            })
        } else if (bank == '' || bank == null || bank == undefined) {
            Swal.fire({
                icon: "error",
                title: "Escolha um banco",
            })
        } else if (!over18 && !cpfValidator(cpfResponsible)) {
            Swal.fire({
                icon: "error",
                title: "CPF do responsável inserido é inválido",
                text: "Verifica se foi digitado corretamente",
            })
        } else if (cep == '' || cep == null || cep == undefined) {
            Swal.fire({
                icon: "error",
                title: "CEP inserido é inválido",
                text: "Digite um cep válido",
            });
        } else if (number == '' || number == null || number == undefined) {
            Swal.fire({
                icon: "error",
                title: "Numero não foi inserido"
            });
        } else {
            valueReturn = {
                personal: {
                    name: name,
                    phone: phone,
                    birth: birth,
                    email: email,
                    cpf: cpf,
                    cpfResponsible: cpfResponsible,
                    bank: bank
                },
                address: {
                    cep: cep,
                    street: street,
                    neighborhood: neighborhood,
                    city: city,
                    state: state,
                    number: number,
                    complement: complement
                }
            }
        }
        return valueReturn
    }

    return (
        <DataContext.Provider value={{
            name, setName,
            phone, setPhone,
            birth, setBirth,
            email, setEmail,
            cpf, setCpf,
            cpfResponsible, setCpfResponsible,
            bank, setBank,

            cep, setCep,
            street, setStreet,
            city, setCity,
            state, setState,
            number, setNumber,
            neighborhood, setNeighborhood,
            complement, setComplement,
            generateJson,
            over18, setOver18
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider