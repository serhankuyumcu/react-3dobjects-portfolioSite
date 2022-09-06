FROM node:18.8.0-alpine3.15

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm","start"]