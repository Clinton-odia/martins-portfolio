#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const scanDirs = ['src', 'public', 'docs'];
const targetPattern = /TODO\(martins\)(?::\s*([^"\n\r<]+))?/gi;

let totalFound = 0;
const results = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    let match;
    const regex = new RegExp(targetPattern.source, targetPattern.flags);
    while ((match = regex.exec(line)) !== null) {
      totalFound++;
      results.push({
        file: path.relative(rootDir, filePath),
        line: index + 1,
        text: line.trim(),
        detail: match[1] ? match[1].trim() : ''
      });
    }
  });
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        walkDir(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.css'].includes(ext)) {
        scanFile(fullPath);
      }
    }
  }
}

console.log('🔍 Scanning for TODO(martins) placeholders...\n');

scanDirs.forEach(d => walkDir(path.join(rootDir, d)));

if (results.length === 0) {
  console.log('✅ Zero TODO(martins) placeholders found. Ready for production!\n');
  process.exit(0);
} else {
  console.log(`⚠️  Found ${totalFound} TODO(martins) placeholder(s):\n`);
  results.forEach(r => {
    console.log(`  • ${r.file}:${r.line}`);
    console.log(`    ↳ ${r.text}`);
  });
  console.log('\nAudit complete. Martins must confirm these items before final deployment.\n');
  process.exit(0);
}

