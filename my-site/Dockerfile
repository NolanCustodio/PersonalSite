FROM node:18.18-alpine as build

WORKDIR /app

COPY package.json package.json

RUN npm install
RUN npm update
COPY . .
RUN npm run build

FROM nginx:1.25
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
