# Laicai OS Website

Laicai OS official website foundation.

## Run locally

Requires Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

Polling-based file watching is enabled by the development script to avoid
macOS `EMFILE: too many open files` errors in constrained environments.

## Production check

```bash
pnpm build
pnpm start
```
