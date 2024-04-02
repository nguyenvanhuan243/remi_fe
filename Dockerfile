# Use the official Node.js 14 image as base
FROM node:8.15.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install node-sass --save && \
    npm install && \
    npm run build:dll
# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the production server
CMD ["npm", "start"]
