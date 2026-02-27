const jwt = require('jsonwebtoken');
const dynamoService = require('../services/dynamoService');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch from Cloud (DynamoDB)
            let user = await dynamoService.getUser(decoded.email);

            // If not found directly, check if it is a team member login
            if (!user) {
                const allUsers = await dynamoService.getAllUsers();
                user = allUsers.find(t => t.members && t.members.some(m => m.email === decoded.email));
            }

            if (user) {
                const { password, ...cleanUser } = user;
                // Add the actual login email to the user object so the frontend knows who is logged in
                req.user = { ...cleanUser, loginEmail: decoded.email };
                next();
            } else {
                res.status(401).json({ message: 'User not found in cloud' });
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

module.exports = { protect, admin };
