FROM node:18-alpine

RUN apk update && \
    apk add hugo && \
    npm install netlify-cli postcss-cli -g