import mongoose from 'mongoose';
const { Schema } = mongoose;

const placeSchema = new Schema({
    details: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },

});
const Place = mongoose.model('Food', placeSchema);

export default Place;
