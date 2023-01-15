import { Document, ObjectId } from "mongoose";

export interface MyData extends Document {
    first_name: string;
    last_name: string;
    age: number;
    description: string;
    socialnetwork: ObjectId[];
    email: string;
    phone: string;
    theme: 'light' | 'dark';
}