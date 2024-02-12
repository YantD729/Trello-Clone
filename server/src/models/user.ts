import { Schema, model } from "mongoose"
import { UserDocument } from "../types/users.interface"
import validator from "validator"

const userSchema = new Schema<UserDocument>(
    {
        email: {
            type: String,
            required: [true, "Email is require"],
            validate: [validator.isEmail, "invalid email"],
            createIndexes: {unique: true},
        },
        username: {
            type: String,
            required:[true, "User name is require"]
        },
        password: {
            type: String,
            required:[true, "Password is require"],
            select: false,
        },
    },
    {
        timestamps: true,
    }
)

export default model<UserDocument>("User", userSchema)
