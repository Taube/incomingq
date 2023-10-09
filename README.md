# incomingq

A small hobby project to manage todo's with some of the latest web technologies out there.

## The commands

`yarn dev` - Develop without mocked JSON
`yarn dev:json` - Develop with JSON Server for a mocked API
`yarn build` - Build the project
`yarn lint` - Lint the project code
`yarn preview` - Run the preview
`yarn server-json` - Run the JSON server only
`yarn test` - Run the tests with vitest. (Not started.)

## VS Code

In the .vscode folder some important project-wide configurations and settings that makes life with VS Code consistent between developers.

## Docs

In the docs folder there various documentation and notes related to the project will be gathered.

## Data

In the public folder there is a file called db.json. This is the fila that persists the data used by JSON-server.
Please don't fiddle with it.

## The stack

- React ^18.2.0
- react-router-dom": ^6.15.0
- typescript ^5.2.2
- react-redux: ^8.1.2
- @reduxjs/toolkit: ^1.9.5

## The bundling and testing

- vite: ^4.4.5
- vitest: ^0.34.3

## The UI

- headless-ui
- radix-ui
- tanstack/react-table
- react-hook-form
- tailwindcss
- zod

## Code standards

- eslint: 8.2.0
- prettier: ^3.0.2

## Mocking

- json-server: ^0.17.3

## Packe manager
NOTE: Due to failing builds with cloudflare pages with yarn 1.2.2, the whole project was bumped to the latest version of yarn that solved the problem.

- yarn 3.6.4
