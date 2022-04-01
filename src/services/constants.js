import axios from 'axios';

export const fetchData = async (inputValue) => {
    try {
        //axios call
        const CLIENT_URL = 'url.com'
        const response = await axios.get(CLIENT_URL)
        return response
    } catch (error) {
        console.log('error', error)
    }
}

export default fetchData;