FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . . 

CMD ["npm", "start"]