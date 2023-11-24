"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String,
        required: [true, "Please tell us your review"]
    },
    rating: {
        type: Number,
        required: [true, "Please tell us your rating"]
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tour',
        required: [true, "Please tell us about your tour"]
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please tell us about your user"]
    }
});
const Review = (0, mongoose_1.model)('Review', reviewSchema);
exports.default = Review;
