import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    userName: String,
    handle: String,
    verified: Boolean,
    time: String,
    avatarIcon: String,
    title: String,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
},
    {collection: 'tuits'});

export default schema;