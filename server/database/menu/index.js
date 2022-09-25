import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
    {
      menus:[
        {
            name:{type:String,required:true},
            items:[{
                type:mongoose.Types.ObjectId,
                ref:"foods",
            },
            ],
        },
      ],
      
        recommended:[
            {
                type:mongoose.Types.ObjectId,
                ref:"food",
                unique:true,
            },
        ],
    },
    
    {
        timestamps:true,
    }
);

export const MenuMOdel = mongosse.model("menu",MenuSchema);
