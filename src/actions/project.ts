import { ProjectStoreMongo } from '@api/ProjectStoreMongo';
import { defineAction } from 'astro:actions';
import { mongoClient } from 'src/db';

export const project = {
    getAll: defineAction({
        handler: async () => {
            const client = await mongoClient();
            const projectStore = new ProjectStoreMongo(client);

            return projectStore.findAll();
        }
    })
};
