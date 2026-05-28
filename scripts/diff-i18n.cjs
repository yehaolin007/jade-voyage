// One-shot: list keys present in `text`/`html` (CN dicts) but missing in `frText`/`frHtml` (FR dicts).
// Used to find high-priority missing French translations.
const fs = require('fs');
const src = fs.readFileSync('public/i18n.js', 'utf8');

function extractDict(name, openChar) {
  const startTag = `const ${name} = {`;
  const start = src.indexOf(startTag);
  if (start === -1) return new Map();
  let depth = 0;
  let i = start + startTag.length - 1;
  while (i < src.length) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }
  const body = src.slice(start + startTag.length, i);
  const keys = new Map();
  const re = openChar === "'"
    ? /'((?:[^'\\]|\\.)+)'\s*:\s*'((?:[^'\\]|\\.)+)'/g
    : /"((?:[^"\\]|\\.)+)"\s*:\s*"((?:[^"\\]|\\.)+)"/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    keys.set(unescapeJsString(m[1]), unescapeJsString(m[2]));
  }
  return keys;
}

function unescapeJsString(value) {
  return value.replace(/\\([\\'"])/g, '$1');
}

const cnText = extractDict('text', "'");
const frText = extractDict('frText', '"');
const cnHtml = extractDict('html', "'");
const frHtml = extractDict('frHtml', '"');

console.log(`text: CN=${cnText.size}, FR=${frText.size}`);
console.log(`html: CN=${cnHtml.size}, FR=${frHtml.size}`);

function listMissing(label, cn, fr) {
  const missing = [];
  for (const [k] of cn) if (!fr.has(k)) missing.push(k);
  console.log(`\n[${label}] Missing in FR: ${missing.length}\n`);
  missing.sort((a, b) => a.length - b.length);
  missing.forEach((k, i) => {
    if (i < 200) console.log(`[${k.length.toString().padStart(3)}c] ${k}`);
  });
  if (missing.length > 200) console.log(`...and ${missing.length - 200} more`);
  return missing;
}

listMissing('text', cnText, frText);
listMissing('html', cnHtml, frHtml);
