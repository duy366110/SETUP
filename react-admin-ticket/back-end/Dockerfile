FROM node:20.17.0 AS build
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]