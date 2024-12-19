FROM node:20

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y default-mysql-client && npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
