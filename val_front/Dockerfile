# ---------- build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Сначала зависимости (кэш)
COPY package*.json ./
RUN npm ci

# Потом исходники
COPY . .

# Собираем прод-версию
RUN npm run build

# ---------- run stage ----------
FROM nginx:alpine

# Удаляем дефолтный конфиг nginx и кладём свой (для SPA-роутинга)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранную статику
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
