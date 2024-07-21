const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://singhshreyash466:123@cluster0.cd9nwhd.mongodb.net/employeereview");
const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err; // Optionally re-throw the error to handle it elsewhere
    }
};

module.exports = connectUsingMongoose;



