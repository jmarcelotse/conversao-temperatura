# Use a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install
#RUN npm ci --only=production

# Copia o código da aplicação
COPY . .
# COPY src/ ./src/

# Expõe a porta 8080
EXPOSE 8080

# Define o usuário não-root para segurança
USER node

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
