// Simple script to generate favicon files from SVG
// This uses sharp if available, otherwise just uses the SVG

const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// For now, we'll just use the SVG directly
// Modern browsers support SVG favicons
console.log('SVG favicon created at public/favicon.svg');
console.log('Modern browsers will use the SVG favicon.');
console.log('For older browser support, you can convert SVG to ICO/PNG using an online tool or ImageMagick.');
