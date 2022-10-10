import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
    {
        images:[{type:String,required:true},
        {
            Location:{type:String,required:true},
        },
      ],
    

    },
    {
        timestamps:true,
    }
);

export const ImageModel = mongoose.model("images",ImageSchema);