---
id: sheet
title: Sheet
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Sheet Command

<details>
  <summary>
    View the output of **`tt sheet --help`**
  </summary>
  <div>

    ```
    track-time-cli sheet [name]

    Switch to or delete a sheet by name

    Options:
          --version        Show version number                             [boolean]
      -d, --delete, --del  Delete the specified time sheet or time sheet entry
                                                                           [boolean]
      -n, --name           New name to apply to specified time sheet        [string]
          --help           Show help                                       [boolean]
    ```

  </div>
</details>

:::info
If no sheet exists with the specified **name**, a new one will be created and
populated with initial data, consisting of a single empty time sheet named
**main**.
:::

Set the active sheet by **name** with the **`sheet`** command.

## Examples

As this is a simple command, only two examples are provided.

### Switch To A New Sheet

As non-existent sheets are created automatically, you can switch to a new sheet
by using the command as usual:
![Output of `tt s new-sheet`](/img/terminal_screenshots/tt_s_new.svg)

### Switch to An Existing Sheet

:::tip
To begin with, it is worth mentioning that you may often want to see a list of
all sheets before switching to one, in case you can't remember the exact name.
Run **`tt ss`** to see a list of all sheets, with the 5 most recently active
sheets listed separately.
:::

Knowing a sheet name, it can be set as active by passing the name as the single
positional argument to the **`sheet`** command:
![Output of `tt s programming-project-a`](/img/terminal_screenshots/tt_s_existing.svg)
