import { cpf as cpfChecker } from 'cpf-cnpj-validator'

export const cpfValidator = (value) => {
    let status = false

    if (value.length == 14) {
        let cpfNoFormart = value.replace('.', '')
        cpfNoFormart = cpfNoFormart.replace('-', '')
        if (!cpfChecker.isValid(cpfNoFormart)) { // Use o novo nome para a função cpf
            status = false
        } else {
            status = true
        }
    } else {
        status = false
    }

    return status
}

export const nameValidator = (value) => {
    let strValue = value.split(' ')
    return strValue.length < 2 || strValue[0].length < 2 || strValue[1].length < 2 ? true : false
}