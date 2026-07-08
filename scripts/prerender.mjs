// Injects the server-rendered app into build/index.html so search and AI
// crawlers that don't execute JavaScript see the full page content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = resolve(root, 'build/index.html')

const { render } = await import(resolve(root, 'build-ssr/entry-server.js'))

const html = readFileSync(indexPath, 'utf-8')
const marker = '<div id="root">'
if (!html.includes(marker + '</div>')) {
  throw new Error('prerender: could not find empty #root in build/index.html')
}
writeFileSync(indexPath, html.replace(marker + '</div>', marker + render() + '</div>'))
rmSync(resolve(root, 'build-ssr'), { recursive: true, force: true })
console.log('prerender: static HTML injected into build/index.html')
