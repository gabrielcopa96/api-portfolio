import { ObjectId, Document } from "mongoose";

export interface Project extends Document{
      name: string;
      description: string;
      image: string;
      technologies: ObjectId[] | string[];
}