import { StatusCode } from '../../enums/status-code-enum';

export default interface IResponseError {
    message: string;
    status: StatusCode;
}
