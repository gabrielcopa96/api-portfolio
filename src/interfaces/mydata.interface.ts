import { Document } from "mongoose";

export interface MyData extends Document {
    first_name: string;
    last_name: string;
    age: number;
    description: string;
    email: string;
    phone: string;
    theme: 'light' | 'dark';
}