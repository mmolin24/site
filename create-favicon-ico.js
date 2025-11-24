// Script to create favicon.ico from SVG
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const icoPath = path.join(__dirname, 'public', 'favicon.ico');

// Create ICO from SVG (ICO is just multiple PNG sizes)
// For simplicity, we'll create a 32x32 PNG that works as favicon
sharp(svgPath)
  .resize(32, 32)
  .png()
  .toFile(icoPath.replace('.ico', '_temp.png'))
  .then(() => {
    // Copy the PNG as ICO (browsers accept PNG as ICO)
    fs.copyFileSync(icoPath.replace('.ico', '_temp.png'), icoPath);
    fs.unlinkSync(icoPath.replace('.ico', '_temp.png'));
    console.log('✅ Favicon.ico created successfully!');
  })
  .catch(err => {
    console.error('Error creating favicon:', err);
    console.log('Note: Using SVG favicon only. Some browsers may still show old cached icon.');
  });
