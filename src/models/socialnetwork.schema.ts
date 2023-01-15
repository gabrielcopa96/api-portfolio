import { Types, Schema, Model, model } from "mongoose";
import { SocialNetwork } from "../interfaces/socialnetwork.interface";

interface SocialNetworkModelType extends Model<SocialNetwork> {}

const SocialNetworkSchema = new Schema<SocialNetwork>(
   {
      name: {
         type: String,
         required: true
      },
      url: {
         type: String,
         required: true
      },
      image: {
         type: String,
         required: true
      }
   },
   {
      versionKey: false
   }
)

const SocialNetworkModel: SocialNetworkModelType = model("Socialnetworks", SocialNetworkSchema);
export default SocialNetworkModel;