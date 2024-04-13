import { cpf as cpfChecker } from 'cpf-cnpj-validator';

export const cpfValidator = (value) => {
    if (value.length == 14) {
        let cpfNoFormart = value.replace('.', '')
        cpfNoFormart = cpfNoFormart.replace('-', '')
        if (!cpfChecker.isValid(cpfNoFormart)) { // Use o novo nome para a função cpf
            alert("CPF inválido.")
        } else {
            alert('CPF válido')
        }
    } else {
        alert('erro')
    }
}

export const nameValidator = (value) => value.split().length < 2 ? true : false