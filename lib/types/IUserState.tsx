
export default interface IUserState {
    firstName: string
    lastName: string
    levelOfExperience: string
    bio: string
    skills: string[]
    setFirstName: (firstName: string) => void
    setLastName: (lastName: string) => void
    setLevelOfExperience: (levelOfExperience: string) => void
    setBio: (bio: string) => void
    setSkills: (skills: string[]) => void
}