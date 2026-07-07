ARG NODE_VERSION=24.14.1

FROM node:${NODE_VERSION}-alpine AS pruner

WORKDIR /app

RUN npm install -g turbo
COPY . .
RUN turbo prune web --docker

FROM node:${NODE_VERSION}-alpine AS installer

WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/turbo.json ./turbo.json
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

FROM node:${NODE_VERSION}-alpine AS builder
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full .
RUN npm install -g pnpm
RUN pnpm run build

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g pnpm
COPY --from=builder /app/ .
WORKDIR /app/apps/web

CMD ["pnpm", "start"]