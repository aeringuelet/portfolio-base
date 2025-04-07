import type { APIRoute } from 'astro';
import { mongoClient } from '../db';
import { ProjectStoreMongo } from './ProjectStoreMongo';

export const prerender = false;

export const GET: APIRoute = async ({}) => {
    const client = await mongoClient();
    const projectStore = new ProjectStoreMongo(client);

    const projectsFromDb = await projectStore.findAll();

    return new Response(JSON.stringify(projectsFromDb), {
        status: 200
    });
};
