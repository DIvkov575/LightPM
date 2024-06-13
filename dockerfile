FROM node:slim
WORKDIR /app
COPY client/build/ client/build/
COPY server server
WORKDIR /app/server
RUN npm install --only=production --omit=dev
EXPOSE 3009
CMD ["node", "server.js"]