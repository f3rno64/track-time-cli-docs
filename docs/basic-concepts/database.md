---
id: database
title: Database
sidebar_position: 1
---

:::info
#### By default, the database is located at _`~/.track-time-cli/db.json`_
:::

**track-time-cli** stores all activity in your **home** folder within a single
**JSON** file named **`db.json`**. This file holds all your time sheets and
entries. Most commands will only append to it, so expect it to grow linearly
over time.

Since it is a plain JSON file, it can be inspected with programs like
[**jq**][jq-url], or edited with any text editor.

<br />

Not all commands will modify the database; commands like **`tt list`**,
**`tt today`** and **`tt week`** will only read from it, whereas other commands
like **`tt in`** and **`tt out`** will modify it upon command execution.

<br />

:::tip
To pretty-print its contents, you may run
**`cat ~/.track-time-cli/db.json | jq .`**
:::

> #### NOTE: _The database file is minified by default._

<br />

### Schema

As the internal schemas of the **time sheet** and **time sheet entry** models
are reproduced when first mentioned, the [**schema**][db-schema-url] of the
database itself can be found below:

```ts showLineNumbers
export interface ITimeTrackerDB<T> {
  sheets: ITimeSheet<T>[]
  activeSheetName: string | null
  version: number
}
```

### Initialization

:::info
A sheet named **main** is present by default in new databases.
:::

<br />

If no database exists, upon the first invocation of **`track-time-cli`**,
_regardless of which command is used_, a new empty database will be created
with a single default time sheet named **main**.

The contents of this fresh database are the following:

```js
{
  "version": 2,
  "activeSheetName": "main",
  "sheets": [
    {
      "entries": [],
      "name": "main",
      "activeEntryID": null
    }
  ]
}
```

### Migrations

Sometimes when an update is released, the database schema may be updated,
increasing the **version** number in the **`db.json`** file. When this happens,
**`track-time-cli`** will automatically migrate the contents of the database to
the new schema when any command is invoked, prior to command execution.

:::note
A backup prior to each migration is created at as
**`~/.track-time-cli/db.json.bak-1`**, where the numeric suffix is the old
database version number.
:::

### Backups

Since the database is a single file, you can back it up by creating a git
repository within the **`~/.track-time-cli`** folder.

:::tip
**A private GitHub repository is a good place to put this.**
:::

To start backing up your data, you can do something like the following:

```sh
cd ~/.track-time-cli
git init .
git remote add origin git@github.com:username/track-time-cli-backup.git
git add db.json
git commit -m 'chore: update'
git push origin main
```

Afterwards, to update your backup, just commit the latest changes and push:

```sh
git add db.json
git commit -m 'chore: update'
git push origin main
```

[jq-url]: https://stedolan.github.io/jq/
[db-schema-url]: https://github.com/f3rno64/track-time-cli/blob/main/src/types/generic_data.ts#L15-L19
