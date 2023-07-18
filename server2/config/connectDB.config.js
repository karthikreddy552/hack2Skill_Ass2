const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connection established");
    } catch (error) {
        console.log(error);;
        console.log("Unable to connect to Database: " + error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;