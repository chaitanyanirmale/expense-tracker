import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
   const { name, email, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   const newUser = new User({
      name,
      email,
      password: hashedPassword
   });
   try {
      await newUser.save()
      res.status(201).json("User created successfully");
   } catch (error) {
     next (error);
   }
   
}

export const signin = async (req, res, next) => {
   const { email, password } = req.body;
   try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
         return next(errorHandler(404, "User not found"));
      }
      const validPassword = await bcrypt.compare(password, validUser.password);
      if (!validPassword) {
         return next(errorHandler(400, "Invalid username or password"));
      }
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const {password: pass, ...user} = validUser._doc;
      res
         .cookie('access_token', token, {httpOnly: true})
         .status(200)
         .json({token, user});
   }catch (error) {
      next(error);
   }
}