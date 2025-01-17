import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const PUBLIC_DIR = './public';
const QUALITY = 80; // Adjust quality as needed

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = join(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

async function optimizeImage(path) {
  try {
    const image = sharp(path);
    const metadata = await image.metadata();
    
    if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
      await image
        .jpeg({ quality: QUALITY })
        .toBuffer()
        .then(data => sharp(data).toFile(path));
    } else if (path.endsWith('.png')) {
      await image
        .png({ quality: QUALITY })
        .toBuffer()
        .then(data => sharp(data).toFile(path));
    }
    
    console.log(`✓ Optimized: ${path}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path}:`, error);
  }
}

async function main() {
  console.log('Starting image optimization...');
  let count = 0;
  
  for await (const file of getFiles(PUBLIC_DIR)) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      await optimizeImage(file);
      count++;
    }
  }
  
  console.log(`\nOptimization complete! Processed ${count} images.`);
}

main().catch(console.error); 