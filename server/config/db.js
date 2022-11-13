const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongoose Connecting`.yellow.underline) 
    } catch (error) {
        console.log(error);
        process.exit(1); // 이 줄을 만나면 즉시 종료
    }
}

module.exports = connectDB