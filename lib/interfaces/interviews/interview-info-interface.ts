import IReview from "./review-interface";

export default interface IInterviewInfo {
    title: string;
    summary: string;
    youtubeUrl?: string;
    tags: string[];
    reviews?: IReview[];
}