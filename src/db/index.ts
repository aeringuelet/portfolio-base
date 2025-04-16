import { MongoClient } from 'mongodb';

const connectionUri = import.meta.env.MONGO_URI;

export const mongoClient = async () => {
    const client = new MongoClient(connectionUri);

    try {
        return await client.connect();
    } catch (e) {
        console.error(e);
        throw e;
    }
};
