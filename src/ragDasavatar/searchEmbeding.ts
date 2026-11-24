import { createEmbedding } from "./createEmbedings";
import { retriveChunks } from "./retriveChunks";


export const searchEmbeding = async (query: string) => {
    console.log("Searching for:", query);
    const [embedding] = await createEmbedding([query]);

    const relevantChunks = await retriveChunks(embedding);

    return relevantChunks;
}