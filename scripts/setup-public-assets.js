import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1x1 transparent/dark pixel jpeg buffer for valid file response
const minimalJpgBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
const minimalJpgBuffer = Buffer.from(minimalJpgBase64, 'base64');

// Minimal valid MP4 buffer
const minimalMp4Buffer = Buffer.from([
  0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70,
  0x69, 0x73, 0x6f, 0x6d, 0x00, 0x00, 0x02, 0x00,
  0x69, 0x73, 0x6f, 0x6d, 0x69, 0x73, 0x6f, 0x32
]);

const filesToCreate = [
  'logoig.jpg',
  'CASA CHAPLINA.jpg',
  'talleradultos.jpg',
  'somosuno.mp4',
  'publiremax.mp4',
  'publimercadoplay.mp4',
  'catadevinos.mp4',
  'azara.mp4',
  'ejemplovisuallanding.mp4',
  'la iglesia oculta.jpg',
  'la iglesia oculta (2).jpg',
  'la iglesia oculta (3).jpg',
  'la iglesia oculta (4).jpg',
];

for (let i = 1; i <= 12; i++) {
  filesToCreate.push(i === 1 ? 'espacio.jpg' : `espacio (${i}).jpg`);
}
for (let i = 1; i <= 8; i++) {
  filesToCreate.push(`lacasa${i}.jpg`);
  filesToCreate.push(`shooting${i}.jpg`);
}
for (let i = 1; i <= 10; i++) {
  filesToCreate.push(`saladeensayo${i}.jpg`);
}
for (let i = 1; i <= 7; i++) {
  filesToCreate.push(`marti${i}.jpg`);
}

// Also handle .jpeg variants if referenced
const jpegVariants = [
  'publimercadoplay.jpeg',
  'la iglesia oculta.jpeg',
  'la iglesia oculta (2).jpeg',
  'la iglesia oculta (3).jpeg',
  'la iglesia oculta (4).jpeg',
  'manualmarca.png',
  'paletaytipografía.jpg'
];

[...filesToCreate, ...jpegVariants].forEach((file) => {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    if (file.endsWith('.mp4')) {
      fs.writeFileSync(filePath, minimalMp4Buffer);
    } else {
      fs.writeFileSync(filePath, minimalJpgBuffer);
    }
  }
});

console.log(`Initialized ${filesToCreate.length + jpegVariants.length} asset entries in /public`);
