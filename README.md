# face-transformation

Face Transformation with StyleGAN

## Prerequisites

- Node.js LTS
- Python v3.6.0+
- Docker

## Installation

```shell
$ git clone https://github.com/g2ang/face-transformation
$ cd face-transformation
$ npm i
$ pip install -r requirements.txt
$ git submodule init
```

## Run Server
based on workspace directory

```shell
$ docker build -t face-transformation -f server/Dockerfile .
$ docker run -p 8080:8080 face-transformation
```

## Codebase

```shell
face-transformation        # Root directory
├── encoder                # StyleGAN encoder basement (git submodule)
├── public                 # Static files for web app
├── server                 # Server with Flask
└── src                    # Web app with React
```

## Scripts

- Web app

```shell
$ npm start                # Start web app with development mode
$ npm run build

$ npm run lint
$ npm run lint:ts          # Lint with ESLint
$ npm run lint:css         # Lint with Stylelint

$ npm run prettier         # Formatting with Prettier
$ npm run prettier:check

$ npm run test             # Run test with Jest
$ npm run test:watch       # Run test with watch mode
$ npm run test:coverage    # Run test with coverage

$ npm run storybook        # Run storybook
$ npm run storybook:build  # Build storybook
```
