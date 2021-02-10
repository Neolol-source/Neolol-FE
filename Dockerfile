FROM node:12
RUN apt-get update || : && apt-get install python -y

# Installing dependencies
COPY package*.json ./
RUN npm ci

# Copying source files
COPY . .
# Building app

# Running the app
# EXPOSE 3000
# CMD [ "npm", "start" ]