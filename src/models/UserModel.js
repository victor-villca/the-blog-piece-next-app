import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);
export default mongoose.model.User || mongoose.model('User',  userSchema);
