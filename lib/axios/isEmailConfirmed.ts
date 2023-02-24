import axios, {AxiosError} from "axios";
import config from '../../config.json';

const API_ENDPOINT = config.apiEndpoint;


export default async function isEmailConfirmed(token:string){
    try {
        const response = await axios.post(`${API_ENDPOINT}/users/email/confirmation/${token}`);
        console.log(JSON.stringify(response?.data));
        
        return 'Email is confirmed successfully';
    } catch (err) {
        const error = err as any;
        if (!error?.response) {
            return error.response?.message;
        } else if (error.response?.status) {
            return error.response.message;
        } else {
            return 'something wrong happened';
        }
    }
}