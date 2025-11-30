# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
ARG VITE_API_URL=http://backend:3000
ENV VITE_API_URL=${VITE_API_URL}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
