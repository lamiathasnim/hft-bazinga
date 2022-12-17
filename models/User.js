const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    location: {
        type: String,
        required : true
    },
    companyName: {
        type : String,
        required : true
    },
    serialId:{
        type : String,
        required : true,
        unique : true

    },
})

const User = mongoose.model('user', userSchema)

module.exports = User