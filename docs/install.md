---
id: install
title: Install ⏱️
sidebar_position: 2
---

# Install

:::note
Upon the **first** invocation, if no database exists at the default location, a
new database is created with a single active sheet named **main**.
:::

You can install **track-time-cli** from the
[**NPM registry**][npm-registry-url]:

```sh
npm i -g track-time-cli

tt --help
```

It will then be available as the `tt` command.

<details>
  <summary>
    View the output of **`tt --help`**
  </summary>
  <div>
    ```text
track-time-cli now

Display all active time sheet entries

Commands:
  track-time-cli in [description..]    Check in to a time sheet     [aliases: i]
  track-time-cli now                   Display all active time sheet entries
                                                                       [default]
  track-time-cli out                   Check out of the active time sheet entry
                                                                    [aliases: o]
  track-time-cli week [sheets..]       Display a summary of activity for the
                                       past week                    [aliases: w]
  track-time-cli list [sheets..]       List all time sheet entries  [aliases: l]
  track-time-cli edit [description..]  View, edit, or delete a time sheet entry
                                                                    [aliases: e]
  track-time-cli today [sheets..]      Display a summary of activity for today
                                                                    [aliases: t]
  track-time-cli sheet [name]          Switch to or delete a sheet by name
                                                                    [aliases: s]
  track-time-cli sheets                List all sheets             [aliases: ss]
  track-time-cli resume                Start a new entry with the same
                                       description as the previous one
                                                                    [aliases: r]
  track-time-cli yesterday [sheets..]  Display a summary of activity for
                                       yesterday                    [aliases: y]
  track-time-cli breakdown [sheets..]  Display total durations per day for one
                                       or more sheets               [aliases: b]

Options:
      --version   Show version number                                  [boolean]
  -h, --humanize  Print the total duration in human-readable format    [boolean]
      --help      Show help                                            [boolean]

Examples:
  tt in --at "20 minutes ago" fixing a bug  Check in at a custom time
  tt out --at "5 minutes ago"               Check out at a custom time
  tt list --today --all                     View all entries from today
  tt b                                      Show a breakdown of your activity
  tt today --all                            View activity for the current day
    ```
  </div>
</details>

[npm-registry-url]: https://www.npmjs.com/package/track-time-cli
