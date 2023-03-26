import  IUser  from './IUser'

export default interface IAuthState {
    user: IUser
    accessToken: string
    refreshToken: string
    setAccessToken: (accessToken: string) => void
    setRefreshToken: (refreshToken: string) => void
    setUser: (user: IUser) => void
}