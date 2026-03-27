# offline-first

A learning project exploring offline-first data access and synchronisation using Supabase and PowerSync. Built in small steps, starting from the simplest possible online-first baseline and progressively adding offline capabilities.

## What's Here

| File | What it is |
|---|---|
| `online-first-demo.html` | A plain HTML page that reads and writes directly to Supabase — no framework, no build step |
| `docs/` | Explanation guides documenting the concepts behind each step |

---

## Getting Started

### 1. Create the Supabase table

In your Supabase project, open the SQL Editor and run:

```sql
create table notes (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  created_at timestamptz default now()
);
```

### 2. Configure the demo

Open `online-first-demo.html` and replace the two constants at the top of the script:

```js
const SUPABASE_URL = 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'
```

Your project URL and anon key are in your Supabase dashboard under **Project Settings → API**.

### 3. Run the demo

```bash
python3 -m http.server 8081
```

Open `http://localhost:8081/online-first-demo.html`.

### 4. Run the docs

```bash
python3 -m http.server 8080 --directory docs
```

Open `http://localhost:8080`.

---

## Prerequisites

| Prerequisite | Purpose | Notes |
|---|---|---|
| **Python 3** | Serve the demo and docs locally | Ships with macOS |
| **Chrome** | Run the demo and browser tooling | Any recent version |
| **Supabase account** | Back the online-first demo | Free tier is sufficient |
| **Claude Code** | AI assistance, Supabase MCP integration | Install: `npm i -g @anthropic-ai/claude-code` |
| **Claude in Chrome extension** | Visual testing and browser automation via MCP | Optional; install from the Chrome Web Store |

### Claude Code AI Tools

The `.mcp.json` and `.claude/settings.json` files are checked in — Claude Code picks them up automatically when you open the project.

| Tool | What it does | How to enable |
|---|---|---|
| **Supabase MCP** | Query logs, run advisors, execute SQL, manage your project, and search Supabase docs — all from Claude Code | Enable the `supabase` plugin in Claude Code settings |
| **Supabase Postgres Best Practices skill** | Postgres query and schema optimisation guidance | Enable the `postgres-best-practices` skill in Claude Code settings |
| **PowerSync Docs MCP** | Search PowerSync documentation from Claude Code | Configured in `.mcp.json` — loads automatically |
| **PowerSync skill** | Guided onboarding and best practices for PowerSync integration | Install via Claude Code skill manager |

---

## Stack

- **Supabase** — cloud Postgres database and REST API
- **PowerSync** — offline sync layer (coming)
