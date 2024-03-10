import mongoose from "mongoose";

const videoLinkSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
});

const otherSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const sub_descriptionSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
});



const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sinhalaTitle: {
        type: String,
        required: true
    },
    blog:{
        type: String,
    },
    language:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language'
    },
    slug: {
        type: String,
        required: true,
        uniqe:true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    imdb: String, 
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    }],
    thumbnail: {
        type: String,
        default: "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
    },
    isPublic:{
        type: Boolean,
        default: false
    },
    trailer_url: String,
    video_links: [videoLinkSchema],
    other: [otherSchema],
    sub: [sub_descriptionSchema],
    downloadCount: {
        type: Number
    },
    
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' // Reference to comments associated with this blog
    }]
}, {
    timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
