import axios, {AxiosError} from "axios";
import config from '../../config.json';

const API_ENDPOINT = config.apiEndpoint;


export default async function isEmailConfirmed(token:string):Promise<boolean>{
    try {
        const response = await axios.post(`${API_ENDPOINT}/users/email/confirmation/${token}`);
        console.log(JSON.stringify(response?.data));
        
        return true;
    } catch (err) {
            return false;
        }
    }
    