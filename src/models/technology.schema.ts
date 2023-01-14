import { Schema, model, Model } from 'mongoose';
import { Technology } from '../interfaces/technology.interface';

interface TechnologyModel extends Model<Technology> {}

const TechnologySchema = new Schema<Technology>(
   {
      name: {
         type: String,
         required: true,
         unique: true
      },
      image: {
         type: String,
         required: true,
      }
   },
   {
      versionKey: false,
   }
)

const TechnologyModel: TechnologyModel = model("Technologies", TechnologySchema);
export default TechnologyModel;