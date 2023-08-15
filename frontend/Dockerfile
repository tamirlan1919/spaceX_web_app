# Этап сборки React-приложения
FROM node:14.17.3 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап для запуска React-приложения
FROM nginx:1.21.1
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]