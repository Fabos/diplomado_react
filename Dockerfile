# Establecer la imagen base
FROM node:16-alpine as dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --frozen-lockfile
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

FROM node:16-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN npm run build


FROM nginx:stable-alpine as prod
EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
# COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx","-g", "daemon off;" ]
