import express from "express";
import User from "../models/user.model.js";
import bycrypt from "bcryptjs";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bycrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default signup;
