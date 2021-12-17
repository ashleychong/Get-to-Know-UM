import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

const secret = "secret";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    // email does not exist
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //incorrect password
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid email or password." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "2h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    // res.status(500).json({ message: "Something went wrong" });
    res.status(401);
    throw new Error("Invalid email or password.");
  }
};

export const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { email, firstName, lastName, matricNumber, image } = req.body;

  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    { email, name: `${firstName} ${lastName}`, matricNumber, image },
    { new: true }
  );
  res.json(updatedUser);
};

export const updatePassword = async (req, res) => {
  const { userId } = req.params;
  const { oldPassword, newPassword, newConfirmPassword } = req.body;

  const user = UserModel.findById(userId);

  const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  if (newPassword !== newConfirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    { password: hashedPassword },
    { new: true }
  );

  res.json(updatedUser);
};

export const signUp = async (req, res) => {
  // console.log(req.body);
  const { email, password, confirmPassword, firstName, lastName, matricNumber } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      // return res.status(404).json({ message: "User already exists" });
      return res
        .status(400)
        .send("User with the provided email already exist.");
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    console.log("have u returned");

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      name: `${firstName} ${lastName}`,
      matricNumber,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret, {
      expiresIn: "2h",
    });

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
