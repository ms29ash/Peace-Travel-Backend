import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Review = mongoose.model('Food', reviewSchema);

export default Review;
