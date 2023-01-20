FROM node:17

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app/

EXPOSE 3001

CMD ["npm", "start"]