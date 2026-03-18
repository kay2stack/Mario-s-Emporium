const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const iconsDir = path.join(__dirname, '..', 'public', 'icons');
  
  // Ensure directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  const sizes = [192, 512];
  
  for (const size of sizes) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
      <rect width="512" height="512" rx="100" fill="#e8181b"/>
      <text x="256" y="380" font-family="Arial Black, Arial, sans-serif" font-size="320" font-weight="900" text-anchor="middle" fill="#f7c800">M</text>
    </svg>`;
    
    const outputPath = path.join(iconsDir, `icon-${size}.png`);
    
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Created ${outputPath}`);
  }
  
  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error);
