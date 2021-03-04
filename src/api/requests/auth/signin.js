import { mainAPI } from '../../../config/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function signin(username, password) {
    let user = await mainAPI.post('/signin', {
        username: username,
        password: password
    })

    AsyncStorage.setItem('@userToken', user.data.token)
    AsyncStorage.setItem('@userName', user.data.full_name)

    console.log(user.data.token)
}