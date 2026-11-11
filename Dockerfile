#Build App
FROM node:26-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Serve with nginx

FROM nginx:alpine

WORKDIR /app/dist /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build ./build
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]