import { Document, ObjectId } from "mongoose";
import { SocialNetwork } from "./socialnetwork.interface";

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

export interface MyDataOutput extends Document{
    first_name: string;
    last_name: string;
    age: number;
    description: string;
    email: string;
    phone: string;
    theme: 'light' | 'dark';
}

export interface MyDataFindOutput extends MyDataOutput {
    _id: ObjectId | string;
    socialnetwork: SocialNetwork[];
}

export type ServiceOutputSuccess = {
    status: number;
    data: MyDataOutput;
    message?: string;
}

export type ServiceOutputFailure = {
    status: number;
    data?: string;
    message: string;
}

export type UpdateDataSuccess = {
    status: number;
    message: string;
 }