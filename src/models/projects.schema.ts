import { Types, Schema, model, Model } from "mongoose";
import { Project } from "../interfaces/project.interface";

interface ProjectModel extends Model<Project> {}

const ProjectSchema = new Schema<Project>(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      technologies: [
         {
            type: Types.ObjectId,
            ref: "Technologies",
         },
      ]
   },
   {
      versionKey: false,
   }
)

const ProjectModel: ProjectModel = model("Projects", ProjectSchema);
export default ProjectModel;