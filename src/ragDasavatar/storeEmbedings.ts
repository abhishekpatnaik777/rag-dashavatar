import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";

const client = new QdrantClient({
    url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_API_KEY,
});

export const storeEmbedings = async (chunks: string[], embeddings: number[][]) => {
    const { exists } = await client.collectionExists("dasavatar");
    if (!exists) {
        await client.createCollection("dasavatar", {
            vectors: { size: 1536, distance: "Cosine" },
        });
    }
    const points = chunks.map((chunk, index) => ({ 
        id: index + 1,
        vector: embeddings[index], 
        payload: { text: chunk }
    }));
    await client.upsert("dasavatar", { points });
}

export const getEmbedings = async (query: string) => {
    const results = await client.query("dasavatar", {
        query: query,
        limit: 3,
    });
    return results;
}