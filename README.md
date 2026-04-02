# Rogue Valley Landscapes

[cloudflarebutton]

A modern, full-stack web application built with React, TypeScript, and Cloudflare Workers. Features a responsive UI with shadcn/ui components, Tailwind CSS styling, and a Hono-based API backend. Designed for seamless development, deployment, and scaling on Cloudflare's edge network.

## Features

- **Modern React App**: TypeScript, React Router, Tanstack Query for data fetching, and React Hook Form for forms.
- **Beautiful UI**: shadcn/ui component library with Tailwind CSS and custom animations.
- **API Backend**: Hono server running on Cloudflare Workers with CORS and logging support.
- **Theme Support**: Light/dark mode with persistence.
- **Error Handling**: Comprehensive client and server error reporting.
- **Sidebar Layout**: Optional collapsible sidebar for app navigation.
- **Production-Ready**: Optimized builds, type safety, and Cloudflare Pages integration.
- **Mobile-Responsive**: Hooks for mobile detection and responsive design.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion, Sonner toasts, Tanstack Query.
- **Backend**: Hono, Cloudflare Workers, Workers KV/Durable Objects ready.
- **Utilities**: Zod validation, Immer, Zustand state management, React Hook Form.
- **Dev Tools**: Bun, ESLint, Wrangler.

## Quick Start

1. **Clone and Install**:
   ```bash
   git clone <your-repo-url>
   cd rogue-valley-landsca-cl7d0zizq9q5kzdob3bv8
   bun install
   ```

2. **Development Server**:
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured PORT).

3. **Build for Production**:
   ```bash
   bun run build
   ```

## Development

- **API Routes**: Add custom routes in `worker/userRoutes.ts`. The worker dynamically loads them.
- **Pages**: Edit `src/pages/HomePage.tsx` or add routes in `src/main.tsx`.
- **Components**: Use shadcn/ui components from `@/components/ui/*`. Add new ones via `npx shadcn-ui@latest add <component>`.
- **Custom Hooks**: Extend hooks in `src/hooks/`.
- **Styling**: Customize Tailwind in `tailwind.config.js` and `src/index.css`.
- **Linting**:
  ```bash
  bun run lint
  ```
- **Type Generation** (Cloudflare bindings):
  ```bash
  bun run cf-typegen
  ```

Test API endpoints at `/api/*`, e.g., `GET /api/health` or `GET /api/test`.

## Deployment

Deploy to Cloudflare Workers/Pages with one command:

```bash
bun run deploy
```

This builds the app and deploys via Wrangler. Ensure you have:

1. Cloudflare account and Wrangler CLI: `bunx wrangler@latest login`.
2. Update `wrangler.jsonc` with your bindings (KV, DO, etc.) if needed.
3. Set secrets: `wrangler secret put <SECRET_NAME>`.

For preview deploys: `wrangler deploy --name preview-branch`.

[cloudflarebutton]

## Project Structure

```
├── src/              # React app source
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities (utils, error reporting)
│   ├── pages/        # Page components
│   └── main.tsx      # App entrypoint
├── worker/           # Cloudflare Worker (Hono API)
├── tailwind.config.js # Tailwind config
├── tsconfig*.json    # TypeScript configs
└── wrangler.jsonc    # Cloudflare config
```

## Customization

- **Remove Demo Sidebar**: Delete `src/components/app-sidebar.tsx` and update `AppLayout`.
- **Add Routes**: Modify `src/main.tsx` for new pages.
- **API Extensions**: Implement in `worker/userRoutes.ts` (e.g., database integrations).
- **Environment Variables**: Use `wrangler.toml` or secrets for prod.

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push and open a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- Report issues here or via Cloudflare support.