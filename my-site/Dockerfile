FROM node:18.18-alpine
WORKDIR /app
# ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package.json
# COPY package-lock.json package-lock.json

RUN npm install
RUN npm update

COPY . .

CMD ["npm", "run", "start"]
