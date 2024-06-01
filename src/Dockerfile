FROM ubuntu
ARG NODE_MAJOR=22
RUN apt-get update && \
    apt-get install curl -y && \
    curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
    apt-get update && \
    apt install -y nodejs
WORKDIR /app
COPY . .
#EXPOSE 8080
RUN npm install
ENTRYPOINT [ "node", "server.js" ]