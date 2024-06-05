# Use Node.js version 14
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["serve", "-s", "build", "-l", "8080"]
