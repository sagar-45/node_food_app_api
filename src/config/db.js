const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to database ${mongoose.connection.host}`);
    } catch(error) {
        console.error("DB connection error: ", error);
    }
}