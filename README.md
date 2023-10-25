# Getting Started with Vite

This project was build with Docker in mind. If you plan on contributing to this repo please follow the docker setup described below.

TODO: App-Description

## Setup

### `make setup` OR `docker build --no-cache -t vite-app .`

Creates the docker image used to run the vite app.

Installs dependencies in the container.

This step should only be necessary once. You may need to execute it again if your dependencies change.

### `make start` OR `docker compose up -d`

Boots the container.

If no node_modules directory is present on the host the container will expose its own directory to the host.

If you install node_modules for the first time you may need to restart your IDE to see markups.

## Development

### `make start`

The application listens on `localhost:3000`

### `make stop`

Stops the container.

## Deployment

### `make build`

Creates production ready build.

Builds are stored in `/dist`

### `make deploy`

Uses firebase cli to deploy the application.

An authenticated Google account is needed for this step.