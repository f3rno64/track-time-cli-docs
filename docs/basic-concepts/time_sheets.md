---
id: time-sheets
title: Time Sheets
sidebar_position: 2
---

**Time sheets** are primarily collections of **entries**; they have a **name**
field, which is used to refer to them in commands, and a **activeEntryID**
field, which denotes the entry that is now running, or *active*.

For reference, their [**schema**][time-sheet-schema-url] is reproduced below:

```ts showLineNumbers
export interface ITimeSheet<T> {
  name: string
  entries: ITimeSheetEntry<T>[]
  activeEntryID: number | null
}
```

:::info
New time sheets are **automatically created** when they are activated via
the **`tt sheet <name>`** command for the first time. So to start working
within a new sheet, just switch to it with **`tt s <name>`**.
:::

### Recommended Usage

In general, **track-time-cli** was designed to be used with multiple projects
and contexts. Therefore, it is recommended to create a separate time sheet for
each one of your projects, along with any additional sheets that cover
non-project-based activities like **learning**, **reading**, **gaming**,
**hobbies**, etc.

Over time, as your list of time sheets grows, you will benefit from the
support of multiple sheets integrated in all commands; for example, command
output may be broken down by time sheet, commands may take time sheet names as
filters to limit their scope, and other commands can generate overall reports
on your historical activity drawing from all time sheets.

### Creating New Time Sheets

New time sheets are automatically created when they are first set as active via
the **`tt sheet <name>`** command, otherwise known as **`tt s <name>`**. If a
sheet with the provided name exists, it is set as active; otherwise, a new
empty time sheet is created with the specified **name** and set as **active**.

For reference, the output of **`tt s --help`** is reproduced below:

```text
track-time-cli sheet [name]

Switch to or delete a sheet by name

Options:
      --version        Show version number                            [boolean]
  -d, --delete, --del  Delete the specified time sheet or time sheet entry
                                                                      [boolean]
  -n, --name           New name to apply to specified time sheet       [string]
      --help           Show help                                      [boolean]
```

### Switching Between Time Sheets

To change the current active time sheet, use the same **`tt sheet <name>`** or
**`tt s <name>`** command, where **`<name>`** is the name of the time sheet you
wish to switch too.

The output can resemble the following:

![Sample tt sheet new-sheet command output](./img/sample_tt_sheet_output.png)

### Deleting Time Sheets

To delete a time sheet, you can either use the **`edit`** command, passing a
**`--sheet <name>`** argument along with the **`--delete`** flag. For example,
**`tt edit --sheet new-sheet --delete`** will delete the sheet named
*new-sheet*, or you can pass **`--delete`** to the
**`tt sheet <name> command`**. For example, **`tt s new-sheet --delete`**.

### Listing Time Sheets

To view a list of all time sheets, use the **`tt sheets`** command, also
available as **`tt ss`**. It will display a list of all time sheets, their total
entry counts, and their total logged entry durations. It supports a few flags,
such as **`--since '<natural-language date string>'`** which will limit the time
sheet entries included in the output to those that occurred since the specified
date.

:::tip
For arguments supporting natural-language date specification, you can specify
the date or time relative to the present moment. For example,
**`--since '2 days ago'`**, **`--since '12 hours and 30 minutes ago'`**, and
**`--since 'three months ago'`** are all valid inputs.
:::

For reference, the output of **`tt sheets --help`** is reproduced below:

```text
track-time-cli sheets

List all sheets

Options:
      --version   Show version number                                 [boolean]
  -h, --humanize  Print the total duration in human-readable format   [boolean]
  -s, --since     Only list entries since the specified date          [string]
  -t, --today     Show results for today                              [boolean]
      --help      Show help                                           [boolean]
```

To illustrate, this is how many time sheets the [*author*][author-url] of
**track-time-cli** uses at the time of writing this documentation:

<div className="w-3/4 mx-auto">
  ![sample `tt sheets` command output](./img/sample_tt_sheets_output.png)
</div>

[author-url]: https://github.com/f3rno64
[time-sheet-schema-url]: https://github.com/f3rno64/track-time-cli/blob/main/src/types/generic_data.ts#L9-L13
