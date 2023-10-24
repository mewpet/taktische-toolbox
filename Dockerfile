FROM node:20-alpine3.17

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

WORKDIR /usr/src/app

CMD [ -d "node_modules" ] && npm start || npm ci && npm start
