const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'client', 'public', 'images');
const MIN_SIZE = 1 * 1024 * 1024; // 1MB
const MAX_WIDTH = 800;
const QUALITY = 75;

async function compressImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await compressImages(fullPath);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    
    const stats = fs.statSync(fullPath);
    if (stats.size < MIN_SIZE) continue;
    
    const sizeMB = (stats.size / 1024 / 1024).toFixed(1);
    try {
      // Read file into buffer first to avoid file locking issues
      const inputBuffer = fs.readFileSync(fullPath);
      const img = sharp(inputBuffer);
      const meta = await img.metadata();
      
      let pipeline = sharp(inputBuffer);
      if (meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }
      
      let buf;
      if (ext === '.png') {
        buf = await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer();
      } else {
        buf = await pipeline.jpeg({ quality: QUALITY }).toBuffer();
      }
      
      fs.writeFileSync(fullPath, buf);
      const newSize = (buf.length / 1024 / 1024).toFixed(1);
      console.log(`OK ${entry.name}: ${sizeMB}MB -> ${newSize}MB`);
    } catch (e) {
      console.log(`FAIL ${entry.name}: ${e.message}`);
    }
  }
}

compressImages(imgDir).then(() => console.log('Done!'));
