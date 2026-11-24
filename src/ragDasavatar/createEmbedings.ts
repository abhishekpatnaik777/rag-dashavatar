import OpenAI from "openai";
const openai = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY
});

export async function createEmbedding( chunks: string[] ) {
    console.log("Creating embeddings for:", chunks);
    const embeddings = await openai.embeddings.create({    
        model: "text-embedding-3-small",
        input: chunks,
        encoding_format: "float",
        dimensions: 1536
    });

    return embeddings.data.map((embedding) => embedding.embedding);
}