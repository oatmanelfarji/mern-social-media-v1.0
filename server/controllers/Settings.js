import mongoose from "mongoose";
import User from "../models/User.js";
import settings from "../models/settings.js";

/* READ */
export const getUsersettings = async (req, res) => {
  try {
    const { userId } = req.params;
    const Settings = await settings.findById(userId);
    res.status(200).json(Settings);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* CREATE */

{/*

export const createSittings = async (req, res) => {
    try {
        const { userId, firstName, lastName, location, occupation, birthday, gender, picturePath } = req.body;
        const newsettings = new settings({
            userId,
            firstName,
            lastName,
            location,
            occupation,
            userPicturePath: picturePath,
            birthday,
            gender,
        });
        await newsettings.save();
        res.status(201).json(newsettings);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

*/}

/* UPDATE */
export const updateSittings = async (req, res) => {
    try {
        console.log(req.file);
        const { userId, firstName, lastName, location, occupation, birthday, gender, picturePath } = req.body;
        const user = await User.findById(userId);
        const newsettings = new settings({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            occupation: user.occupation,
            userPicturePath: user.picturePath,
            birthday,
            gender,
        });
        await newsettings.save();

        const settings = await settings.findByIdAndUpdate(userId);
        res.status(201).json(settings);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
