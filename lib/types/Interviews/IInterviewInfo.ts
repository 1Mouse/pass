import IReview from "./IReview";

export default interface IInterviewInfo {
    title: string;
    summary: string;
    youtubeUrl: string;
    tags: string[];
    reviews?: IReview[];
}