import express from "express";
import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import errorHandler from "../utils/error.js";

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = bycrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // next(errorHandler(550, error.message));
    next(error);
  }
};

export default signup;
