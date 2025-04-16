import type { Project } from '@baseTypes/Project';
import type { Collection, MongoClient } from 'mongodb';
import type { ProjectStore } from './ProjectStore';

export class ProjectStoreMongo implements ProjectStore {
    private readonly projectsCollection: Collection<Project>;

    constructor(mongoClient: MongoClient) {
        this.projectsCollection = mongoClient
            .db()
            .collection<Project>('projects');
    }

    findAll: ProjectStore['findAll'] = async () => {
        return await this.projectsCollection.find().toArray();
    };

    add: ProjectStore['add'] = async (project: Project) => {
        this.projectsCollection.insertOne(project);
    };

    find: ProjectStore['find'] = async () => {
        throw new Error('Not implemented');
    };
}
