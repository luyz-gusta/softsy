import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [cpfResponsible, setCpfResponsible] = useState('')
    const [bank, setBank] = useState('')

    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    const [jsonState, setJsonState] = useState({
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
            city: city,
            state: state,
            number: number,
            complement: complement
        }
    })

    const genreateJson = () => {
        setJsonState({
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
                city: city,
                state: state,
                number: number,
                complement: complement
            }
        })

        return jsonState
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
            complement, setComplement
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider