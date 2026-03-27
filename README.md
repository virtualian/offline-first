# offline-first

A learning project exploring offline-first data access and synchronisation using Supabase and PowerSync. Built in small steps, starting from the simplest possible online-first baseline and progressively adding offline capabilities.

## What's Here

| File | What it is |
|---|---|
| `online-first-demo.html` | A plain HTML page that reads and writes directly to Supabase — no framework, no build step |
| `docs/` | Explanation guides documenting the concepts behind each step |

## Docs

The `docs/` folder contains explanation guides written in Markdown. They are served as a browsable site using [Docsify](https://docsify.js.org/) — a runtime Markdown renderer that requires no build step.

To view the docs locally:

```bash
python3 -m http.server 8080 --directory docs
```

Then open `http://localhost:8080`.

Docs are organised by role then content type following the [Diátaxis](https://diataxis.fr/) framework. Diagrams use [Mermaid](https://mermaid.js.org/).

## Stack

- **Supabase** — cloud Postgres database and REST API
- **PowerSync** — offline sync layer (coming)
- **Supabase CLI** — local development and migrations
- **PowerSync CLI** — sync configuration and deployment
