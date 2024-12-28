require('dotenv').config();
const  mongoose  =  require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connection SUCCESS');
    }
    catch(error){
        console.log('MongoDB connection failed',error.message);
        process.exit(1);

    }
}

module.exports = connectDB;