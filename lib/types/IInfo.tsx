import ISocials from './ISocials'
import ITimeSlot from './ITimeSlot'
export default interface IInfo {
        firstName: string
        lastName: string
        bio: string
        levelOfExperience: string
        price?: number
        priceable?: boolean
        interviewsHad?: []
        interviewsMade?: []
        skills?: string[]
        socials?: ISocials
        timeslots?: ITimeSlot[]
        merchantId?: string
    }
