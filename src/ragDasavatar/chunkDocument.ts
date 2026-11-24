export function chunkDocument(text: string) {
    const chunks = text.split(/\n\s*\n/);
    return chunks.map((chunk: string) => chunk.trim()).filter(Boolean);
}