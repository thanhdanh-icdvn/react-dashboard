FROM node:lts-alpine as dev

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE ${VITE_APP_PORT}

CMD ["npm", "run", "dev"]