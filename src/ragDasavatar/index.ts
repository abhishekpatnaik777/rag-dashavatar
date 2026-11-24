import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadDocument } from './loadDocument';
import { chunkDocument } from './chunkDocument';
import { createEmbedding } from './createEmbedings';
import { storeEmbedings } from './storeEmbedings';
import { searchEmbeding } from './searchEmbeding';

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const filePath = join(__dirname, '../docs/dasavatar.txt');

// const content = await loadDocument(filePath);

// const chunks = chunkDocument(content);

// const embeddings = await createEmbedding(chunks);

// await storeEmbedings(chunks, embeddings);

const results = await searchEmbeding("Varaha avatar?");
console.log(results);