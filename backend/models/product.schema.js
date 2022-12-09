import mongoose from "mongoose";

 const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Please provide a product name"],
            trim: true,
            maxLength: [120, "Product name should be a max  of 120 characters"]
        },
        price:{
            type: Number,
            required: [true, "Please provide a product price"],
            trim: true,
            maxLength: [6, "Product name should be less than 1000000"]
        },
        description: {
            type: String,
            //use some kind od editor (Assignment)
        },
        photos: [
            {
                secure_url: {
                    type: String,
                    required: true
                }
            },
        ],
        stock: {
            type: Number,
            default: 0
        },
        collectionId: {
            type: mongoose.Schema.Types.ObjectId ,
            ref: "Collection"
        }
    },
    {
        timestamps: true
    }
 )

 export default mongoose.model("Product", productSchema)