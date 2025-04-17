FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install && \
    apk --no-cache add curl
COPY server.js .
EXPOSE 8000
CMD ["npm", "start"]
