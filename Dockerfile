FROM node:15.4.0-alpine AS base

WORKDIR /base

COPY package*.json ./

RUN npm ci

FROM base AS dev

WORKDIR /app

COPY --from=base ./base/node_modules ./node_modules

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]

FROM base AS builder

WORKDIR /builder

COPY . .

COPY --from=base ./base/node_modules ./node_modules

ENV NODE_ENV=production

RUN npm run build

FROM node:15.4.0-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/.next ./.next
COPY --from=builder /builder/public ./public

RUN npm install next

EXPOSE 3000

USER node

CMD ["npm", "run", "start"]
