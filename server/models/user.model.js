const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true, //Makes sure the username is unique.
        minLength: 5
    },
    password: {
        type: String,
        required: [true, "A password is required"],
        minLength: 6
    }
}, { timestamps: true });

//Hashes the Password.
UserSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model("User", UserSchema);