FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]