import { mainAPI } from '../../../config/api'

export default async function signup(full_name, email, cpf, password) {
    return await mainAPI.post('/signup', {
        full_name: full_name,
        email: email,
        cpf: cpf,
        password: password,
    })
}