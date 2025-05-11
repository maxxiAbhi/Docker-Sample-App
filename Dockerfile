# Use official Node.js base image
FROM max10maityabhinandan/test-app:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
