import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({
    url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_API_KEY,
});

export const retriveChunks = async (embedding: number[]) => {
    const results = await client.query("dasavatar", {
        query: embedding,
        limit: 3,
        with_payload: true,
    });
    return results.points.map((point) => point.payload?.text);
}