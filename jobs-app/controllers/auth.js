const User = require("../models/User");
const BadRequestError = require("../errors/bad-request");
const UnauthenticatedError = require("../errors/unauthenticated");
const jwt = require("jsonwebtoken");

const {StatusCodes} = require("http-status-codes");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ user: {name: user.name}, token :await user.createJWT() });
}

const login = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }

    const user = await User.findOne({email});
    if(!user) {
        throw new UnauthenticatedError("Invalid Credentials");
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credentials");
    }

    const token = await user.createJWT();

    res.status(StatusCodes.OK).json({user: { name: user.name}, token});
}

module.exports = {
    register, 
    login
}
