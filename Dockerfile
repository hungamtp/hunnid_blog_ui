FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire project directory to the working directory
COPY . .
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the desired port (3000 by default for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
