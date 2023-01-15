import { Document } from "mongoose";

export interface SocialNetwork extends Document {
   name: string;
   url: string;
   image: string;
}