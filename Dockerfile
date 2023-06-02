# Base image with Node.js
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Production-ready image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built app from the build stage
COPY --from=build /app/build .

# Install a lightweight web server
RUN npm install -g serve

# Set the command to start the server
CMD ["serve", "-p", "8080", "-s", "."]
