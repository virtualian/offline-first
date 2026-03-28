import { PowerSyncDatabase, createBaseLogger } from '@powersync/web'
import { AppSchema } from './schema.js'

// Enable SDK logging — outputs sync activity, connection status, and errors
// to the browser console. Open DevTools → Console to see it.
createBaseLogger().useDefaults()

// ─── Database Setup ─────────────────────────────────────────────────────────
// PowerSyncDatabase opens a local SQLite database backed by WASM.
// All reads and writes happen locally — no network required.
// Later, we'll add a connector to sync with Supabase via PowerSync Cloud.
let db

async function openDatabase() {
  db = new PowerSyncDatabase({
    schema: AppSchema,
    database: { dbFilename: 'notes.sqlite' }
  })

  await db.init()
  console.log('PowerSync database initialized')

  await loadNotes()
}

// ─── Read ────────────────────────────────────────────────────────────────────
async function loadNotes() {
  const notes = await db.getAll('SELECT * FROM notes ORDER BY created_at DESC')
  renderNotes(notes)
  setStatus(`${notes.length} note${notes.length !== 1 ? 's' : ''} in local database.`)
}

// ─── Write ───────────────────────────────────────────────────────────────────
async function addNote() {
  const input = document.getElementById('noteInput')
  const content = input.value.trim()
  if (!content) return

  await db.execute(
    'INSERT INTO notes(id, content, created_at) VALUES(uuid(), ?, datetime())',
    [content]
  )

  input.value = ''
  await loadNotes()
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function renderNotes(notes) {
  const list = document.getElementById('notesList')
  list.innerHTML = notes.map(note => `
    <li>
      <div>${escapeHtml(note.content)}</div>
      <div class="meta">${escapeHtml(note.created_at || 'just now')}</div>
    </li>
  `).join('')
}

function setStatus(msg) {
  document.getElementById('status').textContent = msg
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// ─── Event Wiring ────────────────────────────────────────────────────────────
// Expose addNote to the onclick handler in index.html
window.addNote = addNote

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('noteInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') addNote()
  })

  openDatabase()
})
