import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Document } from 'mongoose';

export interface Project extends Document {
  name: string;
  description: string;
  images: {
    public_id: string;
    secure_url: string;
  }[];
  startDate: Date;
  endDate: Date;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSchema: Schema<Project> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    images: [
      {
        public_id: {
          type: String,
          required: [true, 'Image public_id is required'],
        },
        secure_url: {
          type: String,
          required: [true, 'Image secure_url is required'],
        },
      },
    ],
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
    technologies: [
      {
        type: String,
        required: [true, 'At least one technology is required'],
      },
    ],
    githubUrl: {
      type: String,
      default: null, // make it optional
    },
    liveUrl: {
      type: String,
      default: null, // make it optional
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel =
  mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default ProjectModel;
