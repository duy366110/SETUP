## Project setup

```bash
$ npm install
$ cd FE -> npm install
```

## Compile and run the project

```bash
# development BE
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```bash
# development FE
$ npm run dev
```

```bash
# development Docker
$ build:
  docker-compose build --no-cache

$ start:
  docker-compose up -d

$ stop:
  docker-compose down
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
