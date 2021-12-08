FROM node:16

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 4000

CMD ["node", "src/index.js"]