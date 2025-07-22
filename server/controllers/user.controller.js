const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = {

    register: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) return res.status(400).json({ message: "Invalid username/password" });

            const passwordValid = await bcrypt.compare(req.body.password, user.password);
            if (!passwordValid) return res.status(400).json({ message: "Invalid username/password" });

            const token = jwt.sign({ id: user._id, username: user.username }, secret, { expiresIn: '1h' });
            res.json({ message: "Login successful", token });
        } catch (err) {
            res.status(500).json(err);
        }
    }

};