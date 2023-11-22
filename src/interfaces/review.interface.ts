import { Schema } from "mongoose";

interface IReview{
    review: string;
    rating: number;
    createAt: Date;
    tour: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
}

export { IReview }