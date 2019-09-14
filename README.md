# uStart plugins

This repository contains the official plugins for [uStart framework](https://ustart.dev).

## Current plugins

Currently there are 3 plugins:

1. regions of Chile: It provides seed data, queries and testing.
2. comunas of Chile: It provides seed data, queries and testing. It works as a standalone package or together with regions of Chile.
3. parameters: It provides queries and mutations. It is intended to be use as global settings for a platform. For instance: rate limits, subscription prices, enable hidden features, etc.

> Refer to each plugin for installation instructions and more details.

Read the documentation in [ustart.dev](https://ustart.dev).

If you like it, remember to give a star ;-)

## Testing

To run the test suite of this repository (all plugins)

1. Clone the full repo:

```shell
git clone https://github.com/ustart-dev/ustart-plugins.git
```

2. Move to `test` folder and install all dependencies

```shell
mv ustart-plugins/test
npm install
```

3. Add `.env` file at the root of `test`

```
NODE_ENV=testing
GRAPHQL_ENDPOINT_PORT=4000
PG_URI="postgres://localhost:5432/plugins_test"
```

> We use database name `plugins_test`, but you can use whatever you want just make sure its name ends with `_test`.

4. Open two terminals: one for start the server and the other one to run the tests

First terminal

```shell
npm start
```

Second terminal (once the server is already running otherwise this will fail)

```shell
npm run test
```
