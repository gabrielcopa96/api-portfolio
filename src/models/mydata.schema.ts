import {Schema, Types, model} from "mongoose";
import { MyData } from "../interfaces/mydata.interface";

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
        }
    }, {
        versionKey: false
    }
)

const DataModel = model('MyData', MyDataSchema);
export default DataModel;
