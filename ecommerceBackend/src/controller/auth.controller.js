const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const { use } = require("..");
const cartService = require("../services/cart.service.js");
const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);
    return res.status(200).send({ jwt, message: "register success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "user not found by email", email });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password..." });
    }
    const jwt = jwtProvider.generateToken(user._id);
    // res.cookie("jwt", jwt, {
    //   httpOnly: true,
    //   domain: "blissbuy.vercel.app",
    //   path: "/",
    //   // secure: true,
    //   sameSite: "None", // Added SameSite attribute
    //   expires: new Date(Date.now() + 48 * 60 * 60 * 1000),
    // });
    // res.cookie("isLogged", true, {
    //   domain: "blissbuy.vercel.app",
    //   path: "/",
    //   // secure: true,
    //   sameSite: "None", // Added SameSite attribute
    // });
    return res.status(200).send({ jwt,userId:user._id,message: "login success" }); // Changed status code to 200
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
