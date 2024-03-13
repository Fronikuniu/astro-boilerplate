# Run project with:

## Install dependencies: 
  - `npm i`
  - `cd apps/api && npm i`

## Configure .env files

Inside `apps/api` copy `.env.example` file and paste as `.env` file, change fields based on your postgres database configuration.

## Run with

### Astro run:

- development:
  - NX extension: `frontend/dev` command
  - console command: `npx nx run frontend:dev`
- build:
  - NX extension: `api/build` command
  - console command: `npx nx run frontend:build`

### Strapi run:

- development:
  - NX extension: `api/serve` command
  - console command: `npx nx run api:serve`
- build:
  - NX extension: `api/build` command
  - console command: `npx nx run api:build`

### E2E tests run:

- NX extension: `frontend-e2e/e2e` command
- console command: `npx nx run frontend-e2e:e2e`
