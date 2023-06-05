import { Schema, model } from "mongoose";

const postSchema = new Schema({
    userId: {
        type: String, 
        require: true,
    },
    postImg: {
        type: String,
    },
    content: {
        type: String
    },
    comments: [
        {
            userId: {
                type: String, 
                require: true,
            },
            postImg: {
                type: String,
            },
            content: {
                type: String
            },
        }
    ]

}, {
    timestamps: true
})

const Post = model("Post", postSchema)

export default Post