import { readFile } from 'node:fs/promises';

export const loadDocument = async (path: string) => {
    const file = await readFile(path, 'utf-8');
    return file.trim();
}
