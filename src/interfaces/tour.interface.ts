/* eslint-disable @typescript-eslint/ban-types */
import { Model } from "mongoose";

interface ITour{
    name: string;
    durationHours: number;
    ratingAverage: number;
    ratingQuantity: number;
    price: number;
    imageCover: string;
    images: string[];
    createAt: Date;
    startDates: Date[];
    startLocation: string;
    locations: string[];
    slug: string;
}

interface ITourMethods{
    getNextNearestStartDateAndEndDate():{
        nextNearestDate: Date,
        estimatedEndDate: Date
    }
}

type TTourModel = Model<ITour, {}, ITourMethods>


export { 
    ITour,  
    TTourModel,
    ITourMethods
}