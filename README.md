# face-transformation

Face Transformation with StyleGAN

## Prerequisites

- Node.js LTS
- Python v3.6.0+

## Installation

```shell
$ git clone https://github.com/g2ang/face-transformation
$ cd face-transformation
$ npm i
$ pip install -r requirements.txt
$ git submodule init
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

$ npm run test
$ npm run test:watch
$ npm run test:coverage

$ npm run storybook
$ npm run storybook:build
```
