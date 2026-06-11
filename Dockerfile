# Static Site Build für Schumm & Rösch Landingpages
# Coolify deployed automatisch mit nginx

# ── Build Stage ──────────────────────────────────────────
FROM node:22-slim AS builder

WORKDIR /app

# pnpm installieren
RUN npm install -g pnpm

# Dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Source Code
COPY . .

# Build
RUN pnpm run build

# ── Runtime Stage ────────────────────────────────────────
FROM nginx:alpine

# Fertige statische Dateien aus Build Stage kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx auf Port 80 (Coolify Standard)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]