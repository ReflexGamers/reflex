FROM node:8.6-alpine
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

CMD ["yarn", "run", "start"]
