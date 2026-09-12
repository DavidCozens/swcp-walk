# Local development image. Node + the project's dependencies.
# Source is bind-mounted at runtime (see compose.yaml / devcontainer.json),
# so this image only needs the dependencies installed.
FROM node:20-bookworm-slim

WORKDIR /app

# Install dependencies first so this layer is cached until package files change.
COPY package.json package-lock.json* ./
RUN npm install

EXPOSE 8080

# Default: run the Eleventy dev server, reachable from the host on :8080.
CMD ["npx", "@11ty/eleventy", "--serve", "--incremental", "--port=8080"]
