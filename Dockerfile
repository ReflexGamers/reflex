FROM node:8.6-alpine

WORKDIR /app

COPY . /app

RUN yarn install

CMD ["yarn", "run", "start"]
