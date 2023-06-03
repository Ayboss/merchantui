# Use node image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the source code
COPY . .

# Set the environment variables
ENV NODE_ENV=production


#commenting out prod build command
# Build the React app
RUN yarn build

# Expose the port used by the Vite.js preview server
EXPOSE 5173
# Specify the command to run when the container starts
#CMD [ "yarn", "dev" ]
#to replace yarn dev
CMD [ "yarn", "start" ]
