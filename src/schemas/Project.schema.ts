import { z } from 'zod';

// Define Zod schema for the project
export const ProjectSchema = z.object({
  name: z.string().min(3,'Name must have 3 character'),
  description: z.string(),
  startDate: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Invalid start date format" }
  ),
  endDate: z.string().refine(
    (date) => !isNaN(Date.parse(date)), // Validate if the date string can be parsed
    { message: "Invalid end date format" }
  ).refine((date)=>{
    //check if date is less than or equal current date
    const currentDate = new Date();
    const endDate = new Date(date);
    if(endDate <= currentDate){
        return true
    }}, 
    { message: "End date must be in the past" }    
  ),
  images: z.array(
    z.object({
      public_id: z.string(),
      secure_url: z.string().url({ message: "Invalid URL format for secure_url" })
    })
  ).min(1, { message: "At least one image is required" }),
  technologies: z.array(z.string()).min(1, { message: "At least one technology is required" }),
  githubUrl: z.string().url({ message: "Invalid URL format for githubUrl" }).optional(),
  liveUrl: z.string().url({ message: "Invalid URL format for liveUrl" }).optional()
});

