const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    
   email: {
        type: Number,
        required: true,
    },

    password: {
        type: Number,
        required: true,
        unique: true,
    },

},
{ timestamps: true }
)

module.exports = mongoose.model("login", loginSchema)