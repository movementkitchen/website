FROM node:10

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
USER root
WORKDIR /app

COPY . .

# NOTE: dependencies need to be installed runtime in the container