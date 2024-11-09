const mongoose = require("mongoose")

const conn = async (req,res) => {
    await mongoose.connect("").then(() => {
        console.log("Connected to MongoDB")
    })
}
conn();