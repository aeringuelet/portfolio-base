import type { Project } from '@baseTypes/Project';
import type { WithId } from 'mongodb';

export interface ProjectStore {
    findAll(): Promise<WithId<Project>[]>;
    add(project: Project): Promise<void>;
    find(slug: string): Promise<WithId<Project> | null>;
}
