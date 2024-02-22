---
id: edit
title: Edit
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Edit Command

<details>
  <summary>
    View the output of **`tt edit --help`**
  </summary>
  <div>

    ```
    track-time-cli edit [description..]

    View, edit, or delete a time sheet entry

    Options:
          --version        Show version number                       [boolean]
      -s, --sheet          Name of time sheet to edit                [string]
      -n, --name           New name to apply to specified time sheet [string]
      -e, --entry          ID of entry to edit                       [number]
          --description    New description for the specified entry   [string]
      -d, --delete, --del  Delete the specified time sheet or time sheet entry
                                                                     [boolean]
          --help           Show help                                 [boolean]
    ```

  </div>
</details>

The **`edit`** command is used to **edit** or **delete** time sheets and time
sheet entries.

Select a time sheet by **name** with the **`--sheet`** argument, or a time
sheet entry by **ID** with the **`--entry`** argument.

:::note
If you omit **`--sheet`** and use **`--entry`**, the active time sheet will be
selected by default.
:::

Time sheet **name** and sheet entry **description** can be set via the
**`--name`** and **`--description`** arguments, respectively.

To delete, select a time sheet or entry and pass **`--delete`**.

:::tip
The **`edit`** command has an alias: **`e`**
:::

## Arguments

:::warning
Deleted items are lost forever.
:::

| argument            | alias                 | type      | description                                                                       | default   |
| ------------------  | -----------           | --------- | --------------------------------------------------------------------------------- | --------- |
| **`--sheet`**       | **`-s`**              | `string`  | Name of time sheet to edit                                                        |           |
| **`--entry`**       | **`-e`**              | `string`  | ID of entry to edit                                                               |           |
| **`--name`**        | **`-n`**              | `string`  | New name to apply to the specified time sheet                                     | **false** |
| **`--description`** |                       | `string`  | New description for the specified entry                                           | **false** |
| **`--delete`**      | **`-d`**, **`--del`** | `boolean` | Delete the specified time sheet or time sheet entry                               | **false** |

## Examples

Examples of editing and deleting sheets and entries are provided below.

### Editing A Time Sheet Name

To edit a time sheet, select it with the **`--sheet`** argument and provide a
new name with the **`--name`** argument:
![Output of `tt e --sheet main --name new-main`](/img/terminal_screenshots/tt_e_sheet_name.svg)

### Editing An Entry Description

To edit an entry's description, select it with the **`--entry`** argument and
provide a new description with the **`--description`** argument:
![Output of `tt e --entry 1 --description "updated description"`](/img/terminal_screenshots/tt_e_entry_description.svg)

### Deleting A Time Sheet

To delete a time sheet, select it with the **`--sheet`** argument and pass
**`--delete`**:
![Output of `tt e --sheet main --delete`](/img/terminal_screenshots/tt_e_delete_sheet.svg)

### Deleting An Entry

To delete an entry, select it with the **`--entry`** argument and pass
**`--delete`**:
![Output of `tt e --entry 1 --delete`](/img/terminal_screenshots/tt_e_delete_entry.svg)
