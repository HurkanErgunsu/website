import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '../public/apps')
const APPS = ['bubble-level', 'pdf-converter', 'planner']
const TYPES = ['privacy', 'terms']

const BACK_LINK = (appId) => `<a class="legal-back" href="/?app=${appId}" aria-label="Back to app">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 12H5"></path>
          <path d="M12 19l-7-7 7-7"></path>
        </svg>
      </a>`

const HEAD = (title, appId) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/apps/legal.css">
</head>
<body>
  <header class="legal-header">
    <div class="legal-shell legal-header-inner">
      ${BACK_LINK(appId)}
    </div>
  </header>
  <main class="legal-shell legal-main">
    <article class="legal-content">
`

function foot(type) {
  const crossLink =
    type === 'privacy'
      ? '<a class="legal-footer-link" href="../terms/index.html">Terms & Conditions</a>'
      : '<a class="legal-footer-link" href="../privacy/index.html">Privacy Policy</a>'

  return `    </article>
    <footer class="legal-footer">
      ${crossLink}
      <p class="legal-footer-copy">© SH Production. All rights reserved.</p>
    </footer>
  </main>
</body>
</html>
`
}

for (const app of APPS) {
  for (const type of TYPES) {
    const filePath = path.join(ROOT, app, type, 'index.html')
    const raw = fs.readFileSync(filePath, 'utf8')

    const titleMatch = raw.match(/<title>(.*?)<\/title>/i)
    const title =
      titleMatch?.[1]?.replace(/&amp;/g, '&') ??
      (type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions')

    const contentMatch = raw.match(
      /<article class="legal-content">([\s\S]*?)(?:<\/article>|\(type\) =>|\(type\)=>)/,
    )
    if (!contentMatch) {
      console.warn(`Skip ${filePath}: no article content`)
      continue
    }

    const content = contentMatch[1].trim()
    fs.writeFileSync(filePath, HEAD(title, app) + content + '\n' + foot(type))
    console.log(`Fixed ${filePath}`)
  }
}
