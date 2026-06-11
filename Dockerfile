# Static Site Build für Schumm & Rösch Landingpages
# Coolify deployed automatisch mit nginx

# ── Build Stage ──────────────────────────────────────────
FROM node:22-slim AS builder

WORKDIR /app

# pnpm installieren
RUN npm install -g pnpm

# Dependencies zuerst (Docker Layer Caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Restlicher Source Code
COPY . .

# Astro Build
RUN pnpm run build

# ── Runtime Stage ────────────────────────────────────────
FROM nginx:alpine

# Eigene nginx-Config mit SPA-Routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fertige statische Dateien aus Build Stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Port 80 (Coolify Standard)
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]