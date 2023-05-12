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
        socials?: {
            linkedin?: string
            github?: string
            twitter?: string
        }
        timeslots?: {
            day: number
            hours: string[]
        }[]
    }
