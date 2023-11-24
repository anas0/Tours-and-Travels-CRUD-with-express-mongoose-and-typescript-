import { Schema, model } from "mongoose";
import { ITour, ITourMethods, TTourModel } from "../interfaces/tour.interface";
import slugify from "slugify";


const tourSchema = new Schema<ITour, ITourMethods, TTourModel>({
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
    
},

{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
}
)

tourSchema.virtual("durationDays").get(function (){
    return this.durationHours / 24
})

tourSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next()
})

tourSchema.methods.getNextNearestStartDateAndEndDate = function(){
    const today = new Date();
    const futureDates = this.startDates.filter((startDate: Date) => {
        return startDate > today;
    })

    futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())

    const nextNearestDate = futureDates[0]
    const estimatedEndDate = new Date(
        nextNearestDate.getTime() + this.durationHours * 60 * 60 * 1000
    )
    
    return {
        nextNearestDate,
        estimatedEndDate
    }
}

const Tour = model<ITour, TTourModel>('Tour', tourSchema)

export default Tour;