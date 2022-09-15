FROM node:18-alpine As build
WORKDIR /posts
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine 
WORKDIR /posts
COPY package.json .
COPY posts.graphql .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD npm run start:prod

