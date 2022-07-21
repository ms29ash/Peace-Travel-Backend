import mongoose from 'mongoose';
import 'dotenv/config'
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connectToMongoose successfully')
    }).catch(err => console.log(err));
}
export default connectToMongo;



