FROM node:alpine
RUN apk update && \
    apk add --no-cache yarn curl
RUN yarn global add npm pm2
WORKDIR /app
COPY package.json /app/package.json
COPY . .
RUN yarn install

CMD [ "pm2-runtime", "index.js", "--no-autorestart" ]