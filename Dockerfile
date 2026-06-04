FROM node:18-alpine

WORKDIR /app

# Copy files
COPY package.json ./
COPY index.html ./
COPY css/ ./css/
COPY js/ ./js/
COPY data/ ./data/

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
