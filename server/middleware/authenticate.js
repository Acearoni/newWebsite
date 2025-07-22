const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "Unauthorized — No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized — Invalid token" });
    }
};

module.exports = authenticate;
