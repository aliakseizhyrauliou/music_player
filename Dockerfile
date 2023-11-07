FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

RUN npm run build

RUN npm run typeorm -- migration:run

CMD [ "node", "dist/src/main"]

ENV DB_HOST=postgres

ENV DB_PORT=5432

ENV DB_USER=postgres

ENV DB_PASSWORD=Password1
