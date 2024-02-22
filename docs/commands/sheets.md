---
id: sheets
title: Sheets
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Sheets Command

<details>
  <summary>
    View the output of **`tt sheets --help`**
  </summary>
  <div>

    ```
    track-time-cli sheets

    List all sheets

    Options:
          --version   Show version number                               [boolean]
      -h, --humanize  Print the total duration in human-readable format [boolean]
      -s, --since     Only list entries since the specified date        [string]
      -t, --today     Show results for today                            [boolean]
          --help      Show help                                         [boolean]
    ```

  </div>
</details>


Use the **`sheets`** command to list all sheets, along their total
**entry count** and **duration**.

You can control the entries that will be included in the results (_total
duration_, etc) by filtering with a minimum start date. Pass a natural-language
date string or unix timestamp to **`--since`** to filter out results prior to
your specified date.

For convenience, **`--today`** is provided as a shortcut to show results for
the current day.

::tip
In general, if you are unsure about the name of a sheet and need to reference
it in another command, quickly running **`tt ss`** will reveal the sheet name.tip

Since the last 5 active sheets are shown separately, you can quickly identify
recently used sheets.
:::

::info
The output list is sorted alphabetically, and the 5 most recently active sheets
are listed in order separately.
:::

## Examples

A few examples are provided below, illustrating common use cases.

### View All Sheets & Lifetime Stats

By default, calling **`tt ss`** will render a list of all sheets and their
total entry counts & durations from the **beginning of time** _(including all
entries)_:
![Output of `tt ss`](/img/terminal_screenshots/tt_ss.svg)

### View Historical Sheet Activity

Passing **`--today`** will only consider sheet entries overlapping with the
present day. The more powerful **`--since`** option supports **natural
language**, **unix timestamps**, and **iso timestamps** as inputs.

For example, to view a list of specific sheets and their activity over the last
2 weeks, run:
![Output of `tt ss --since "2 weeks ago"`](/img/terminal_screenshots/tt_ss_since.svg)

### Switch to An Existing Sheet

:::tip
To begin with, it is worth mentioning that you may often want to see a list of
all sheets before switching to one, in case you can't remember the exact name.

Run **`tt ss`** to see a list of all sheets, with the 5 most recently active
sheets listed separately.
:::

Knowing a sheet name, it can be set as active by passing the name as the single
positional argument to the **`sheet`** command. If it is already active, an
error is returned:
![Output of `tt s programming-project-a`](/img/terminal_screenshots/tt_s_existing_error.svg)
