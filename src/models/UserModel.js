import mongoose from "mongoose";
mongoose.Promise = global.Promise;
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
export default mongoose.models.User || mongoose.model('User',  userSchema);
