FROM node
RUN npm i http-server -g
WORKDIR /app
COPY . /app
CMD cd /app && http-server -p 80
