# Sử dụng image Node.js để build ứng dụng
FROM node:20.17.0 AS build

# Cài đặt thư mục làm việc
WORKDIR /app

# Copy package.json và yarn.lock vào container
COPY . .

# Cài đặt dependencies bằng Yarn
RUN npm install

# Build ứng dụng
RUN npm run build

# Sử dụng image Nginx để phục vụ ứng dụng
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
# Copy build folder vào thư mục static của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose cổng 80 để truy cập vào ứng dụng
EXPOSE 5173

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

