import dbConnect from '@/lib/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import ProjectModel from '@/model/Project.model';
import { Project } from '@/model/Project.model';

// GET all projects
export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const projects = await ProjectModel.find() as Project[];

    // Check if projects array is empty
    if (projects.length === 0) {
      return NextResponse.json(
        {
          message: "No projects found",
          data: []
        },
        {
          status: 404
        }
      );
    }

    // If projects are found, return them
    return NextResponse.json(
      {
        message: "Projects retrieved successfully",
        data: projects
      },
      {
        status: 200
      }
    );

  } catch (error: any) {
    // Handle the error case
    return NextResponse.json(
      {
        message: "An error occurred while fetching projects",
        error: error.message
      },
      {
        status: 500
      }
    );
  }
}

// POST a new project
export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { name, description, startDate, endDate, images, technologies, githubUrl, liveUrl }: Project = await req.json();

    // Ensure required fields are provided
    if (!name || !description || !startDate || !endDate || !images || !technologies) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        {
          status: 400
        }
      );
    }

    // Ensure images array is valid
    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        {
          message: "Images must be an array with at least one image",
        },
        {
          status: 400
        }
      );
    }

    // Create new project
    const project = await ProjectModel.create({
      name,
      description,
      startDate,
      endDate,
      images, // Assuming images are provided in the correct array format
      technologies,
      githubUrl: githubUrl || null,
      liveUrl: liveUrl || null
    }) as Project;

    // Check if project was successfully created
    if (!project) {
      return NextResponse.json(
        {
          message: "An error occurred while creating the project",
        },
        {
          status: 500
        }
      );
    }

    // Success response
    return NextResponse.json(
      {
        message: "Project created successfully",
        data: project
      },
      {
        status: 201
      }
    );

  } catch (error: any) {
    console.error('Error in adding new project :: ' + error);
    return NextResponse.json(
      {
        message: "Error while adding new project",
        error: error.message
      },
      {
        status: 500
      }
    );
  }
}
