# Local development image. Node + the project's dependencies.
# Source is bind-mounted at runtime (see compose.yaml / devcontainer.json),
# so this image only needs the dependencies installed.
# Node 24: the active LTS line, supported to April 2028. Node 20 went end of
# life on 30 April 2026. Keep this in step with `node-version` in
# .github/workflows/deploy.yml by hand — Dependabot updates this line but not
# that one, because there it is an action input rather than a dependency.
FROM node:26-bookworm-slim

WORKDIR /app

# Install dependencies first so this layer is cached until package files change.
COPY package.json package-lock.json* ./
RUN npm install

EXPOSE 8080

# Default: run the Eleventy dev server, reachable from the host on :8080.
CMD ["npx", "@11ty/eleventy", "--serve", "--incremental", "--port=8080"]
