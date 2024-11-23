import mongoose from "mongoose";

const settingsSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        birthday: {
            type: Date,
            default: Date.now,
        },
        gender: {
            type: String,
            default: " ",
        },
        location: {
            type: String,
            default: " ",
        },
        occupation: {
            type: String,
            default: " ",
        },
        userPicturePath: String,
    },
);

const settings = mongoose.model("settings", settingsSchema);

export default settings;
