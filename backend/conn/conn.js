const mongoose = require("mongoose")

const conn = async (req,res) => {
    await mongoose.connect("mongodb+srv://pratik99672:5utxYrSIYlK2kDZ7@cluster0.pyqau.mongodb.net/").then(() => {
        console.log("Connected to MongoDB")
    })
}
conn();