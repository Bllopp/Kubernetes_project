# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=16.14.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR /usr/src/app

COPY public/ /usr/src/app/public
COPY src/ /usr/src/app/src
COPY package.json /usr/src/app/




# Install project dependencies
RUN npm install


# Expose the port that the application listens on.
EXPOSE 3000



# Run the application.
CMD npm run build
