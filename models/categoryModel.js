import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    }
},{timestamps:true});

const CategoryModel = mongoose.model("Category",categorySchema);

export default CategoryModel;

