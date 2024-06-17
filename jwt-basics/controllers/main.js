/* Check usernam, password in post(login) request
 * if exist create new JWT 
 * send back to front-end 
 * 
 * setup authentication so only the request with JWY can access the dashboard 
 * */

const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async(req, res) => {
    const {username, password} = req.body;
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "30d"});
    if(!(username && password)) {
        throw new BadRequestError();
    }
    res.status(200).json({msg: "user created", token});
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your data ${luckyNumber}`});
}

module.exports = {
    login,
    dashboard
}
