FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev \
  && npm install -g opencode-ai@1.2.26 \
  && opencode stats --help >/dev/null \
  && opencode export --help >/dev/null

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
