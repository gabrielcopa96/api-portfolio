import {Model, Types, Schema, model} from "mongoose";
import { MyData } from "../interfaces/mydata.interface";
import { SocialNetwork } from '../interfaces/socialnetwork.interface';

interface MyDataModel extends Model<MyData> {}

const MyDataSchema = new Schema<MyData>(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        description: {
            type: String,
            minLength: 60
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        socialnetwork: {
            type: [Types.ObjectId],
            ref: 'Socialnetworks'
        },
        theme: {
            type: String,
            required: true,
            enum: ['light', 'dark']
        }
    }, {
        versionKey: false
    }
)

const DataModel: MyDataModel = model('MyData', MyDataSchema);
export default DataModel;
