export default interface IUser {
    _id: string
    email: string
    username: string
    confirmed: boolean
    active: boolean
    role: string
    info:{
        _id: string
        firstName: string
        lastName: string
        bio?: string
        levelOfExperience: string
        price: number
        priceable: boolean
        interviewsHad: []
        interviewsMade: []
        skills?: string[]
        socials?: {
            linkedin?: string
            github?: string
            twitter?: string
        }
        timeslots: {
            day: number
            hours: string[]
        }[]
    }
}

