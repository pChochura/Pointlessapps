FROM node
WORKDIR /app
COPY . /app
RUN npm i
CMD cd /app && APP_PORT=80 npm run