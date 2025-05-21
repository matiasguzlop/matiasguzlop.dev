FROM oven/bun:1.2 AS builder

WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
