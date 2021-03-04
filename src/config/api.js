import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const base_domain = '192.168.0.19:3030'
export const web_protocol = "http"

export const api_url = `${web_protocol}://${base_domain}/`;

export const userToken = AsyncStorage.getItem('@userToken');

export const mainAPI = axios.create({
    baseURL: api_url,
    // headers: { Authorization: userToken }
});