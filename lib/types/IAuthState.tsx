import  IUser  from './IUser'

export default interface IAuthState {
    user: IUser
    accessToken: string
    refreshToken: string
    setAccessToken: (accessToken: string) => void
    setRefreshToken: (refreshToken: string) => void
    setUser: (user: IUser) => void
    updateAuth: (user: IUser, accessToken: string, refreshToken: string, imageUrl:string,imageKey:string) => void
    setRole: (role: string) => void
}