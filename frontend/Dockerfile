# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./data-hub/package*.json ./

# Install dependencies
RUN npm install

RUN npm install @n8n/chat

# Copy the rest of the application code
COPY ./data-hub .

# Expose the port the app runs on
EXPOSE 4200

# Define the command to run the app
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
