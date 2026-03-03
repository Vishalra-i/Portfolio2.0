'use client';
import React from 'react'
import {ProjectSchema} from '@/schemas/Project.schema'
import axios from 'axios';
import z from 'zod' ;
import { Project } from '@/model/Project.model';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export const useProject = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);

    //Add new Project
    const addProject = async (project: z.infer<typeof ProjectSchema>) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/projects', project);
            return response.data;
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

   return (
      <div>
         {/* Add new Project */}
         <form onSubmit={(e) => {
            // e.preventDefault();
            // const formData = new FormData(e.currentTarget);
            // const projectData = Object.fromEntries(formData.entries());
            // addProject(projectData);
         }}>
            <input type="text" name="name" placeholder="Project Name" />
            <input type="text" name="description" placeholder="Project Description" />
            <input type="text" name="image" placeholder="Project Image" />
            <button type="submit" disabled={loading}>Add Project</button>
         </form>
         {error && <div>{error}</div>}
      </div>
       
   ) 
}

