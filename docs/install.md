---
id: install
title: Install ⏱️
sidebar_position: 1
---

You can install **track-time-cli** from the
[**NPM registry**][npm-registry-url]:

```sh
npm i -g track-time-cli

tt --help
```

It will then be available as the `tt` command. Run `tt --help` to view a list
of commands.

:::note
Upon the **first** invocation, if no database exists at the default location, a
new database is created with a single active sheet named **main**.
:::

[npm-registry-url]: https://www.npmjs.com/package/track-time-cli
