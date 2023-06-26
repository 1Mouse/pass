import IInfo from "./IInfo";
import ISocials from "./ISocials";
import ITimeSlot from "./ITimeSlot";

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
    socials?: ISocials
    timeslots?: ITimeSlot[]
    setFirstName: (firstName: string) => void
    setLastName: (lastName: string) => void
    setLevelOfExperience: (levelOfExperience: string) => void
    setBio: (bio: string) => void
    setSkills: (skills: string[]) => void
    setPrice: (price: number) => void
    setPricable: (pricable: boolean) => void
    setSocials:(socials:ISocials) =>void
    setTimeSlots:(timeSlots:ITimeSlot[])=>void
    updateInfo: (info: IInfo) => void
}