import IUser from "./user-interface";

export default interface ISigninResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
