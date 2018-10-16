# Get Started with full stack Typescript application 

This project is to show how to create a full stack application mainly in Typescript, which was inspired by the mean stack and a few other projects.

## Technology Stack Used

Basically the frontend of the demo project was built in Angular and the backend was developed under NestJS. The following are technology chosen to present how Typescript can be used for the whole solution.

- [TypeScript](typescriptlang.org)
- [Angular 6](angular.io)
- [Nest (NestJS)](nestjs.com) Use Nest as the server-side framework
- [Fastify](https://github.com/fastify/fastify) Improve performance on the server side
- [Concurrently](https://www.npmjs.com/package/concurrently) Show how to run both client/server concurrently for development

## Quick start

### Before you start

I assume you have already got enough knowledge about Git, Node etc.  Just need to clone the repo and install the repo with either NPM or Yarn.

### Start dev servers

Run `npm run start` to run two servers: one for the frontend and one for backend. Navigate to `http://localhost:3000/` to access the frontend (backend runs on port 3001). The app will automatically reload if you change any of the source files. Run `npm run start:server` if you just want to run the backend.

### Build

Run `npm run build` to build the whole project. The build artifacts will be stored in the `dist/` directory. Use `npm run build:server` if you just want to build the backend.