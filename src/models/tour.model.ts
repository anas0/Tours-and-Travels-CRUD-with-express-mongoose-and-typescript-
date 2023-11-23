import { Schema, model } from "mongoose";
import { ITour } from "../interfaces/tour.interface";


const tourSchema = new Schema<ITour>({
    name: {
        type: String,
        required: [true, "Please tell us your name"]
    },
    durationHours: {
        type: Number,
        required: [true, "Please tell us your duration"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Please tell us your price"]
    },
    imageCover: {
        type: String,
        required: [true, "Please tell us your image cover"]
    },
    images: [String],
    createAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date],
    startLocation: {
        type: String,
        required: [true, "Please tell us your start location"]
    },
    locations: [String],
    slug: String
    
})

const Tour = model<ITour>('Tour', tourSchema)

export default Tour;