import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
        collection: 'posts'
    }
);
export default mongoose.models.Post || mongoose.model("Post", postSchema);
