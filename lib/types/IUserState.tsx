import IInfo from "./IInfo";
export default interface IUserState {
    firstName: string
    lastName: string
    levelOfExperience: string
    bio: string
    skills: string[]
    price?: number
    priceable?: boolean
    interviewsHad?: []
    interviewsMade?: []
    socials?: {
        linkedin?: string
        github?: string
        twitter?: string
    }
    timeslots?: {
        day: number
        hours: string[]
    }[]
    setFirstName: (firstName: string) => void
    setLastName: (lastName: string) => void
    setLevelOfExperience: (levelOfExperience: string) => void
    setBio: (bio: string) => void
    setSkills: (skills: string[]) => void
    updateInfo: (info: IInfo) => void
}