# Use the custom AMI as the base image
#FROM ubuntu:12.04

# Use the official Node.js image for Node.js v18.18.2
FROM node:18.18.2

# Set the working directory for the Express.js server
WORKDIR /app

# Copy the package.json file to the working directory of the Express.js server
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies for the Express.js server
RUN npm install

# Copy the remaining source code of the Express.js server
COPY index.js ./

# Expose the port of the Express.js server
EXPOSE 8080

# Define the command to start the Express.js server
CMD ["npm", "run", "server"]

# Set the working directory for the React frontend
WORKDIR /app/myclock-app

# Copy the package.json file to the working directory of the React frontend
COPY myclock-app/package.json ./
COPY myclock-app/package-lock.json ./

# Install the dependencies for the React frontend
RUN npm install

# Copy the remaining source code of the React frontend
COPY myclock-app .

# Set the working directory for the React frontend
WORKDIR /app/myclock-app/src

# Define the command to start the React frontend
CMD ["npm", "start"]
