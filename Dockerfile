FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev && npm install -g opencode-cli

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
