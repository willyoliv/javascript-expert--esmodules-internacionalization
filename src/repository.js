import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const databaseFile = join(__dirname, '../database.json');

export async function save(data) {
  let currentData = [];

  try {
    const fileContent = await readFile(databaseFile, 'utf-8');
    currentData = JSON.parse(fileContent);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  currentData.push(data);
  await writeFile(databaseFile, JSON.stringify(currentData, null, 2));
}
