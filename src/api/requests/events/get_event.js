import { mainAPI } from '../../../config/api'

export default async function get_events(access_token) {
    return await mainAPI.get('/events/')
}