---
id: list
title: List
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# List Command

<details>
  <summary>
    View the output of **`tt list --help`**
  </summary>
  <div>

    ```
    List all time sheet entries

    Options:
          --version          Show version number                           [boolean]
          --absolute, --abs  Print dates as absolute timestamps            [boolean]
      -h, --humanize         Print the total duration in human-readable format
                                                                           [boolean]
      -s, --since            Only list entries since the specified date     [string]
      -t, --today            Show results for today                        [boolean]
          --all-sheets       Show results for all sheets                   [boolean]
      -a, --all              Show all sheet entries                        [boolean]
      -y, --yesterday        Show results from yesterday                   [boolean]
      -c, --concise          Exclude start and end dates from output, showing
                             duration only                                 [boolean]
      -f, --filter           Filter results by description                  [string]
          --help             Show help                                     [boolean]
          --sheets           Show results for the specified sheets
          [array] [choices: "main"]
    ```

  </div>
</details>

![Banner](/img/terminal_screenshots/tt_l_banner.svg)

The **`list`** command lists time sheet entries. It supports many arguments
that can be used to filter results or modify the rendering of dates and
durations.

It takes one position argument, **`<...sheets>`**, which filters the
time sheets shown in the output. If not provided, only the currently **active**
sheet will be considered.

The arguments **`--today`**, **`--yesterday`**, **`--since`**, and **`--all`**
filter the results by date, while **`--filter`** filters by description.

To hide the start and end dates, use the **`--concise`** flag.

## Arguments

<details>
  <summary>
    Render durations into a human-readable word form with **`--humanize`**
  </summary>
  <div>

:::tip
<br />
The **`-h`** (or **`--humanize`**) argument switches the rendering of durations
from a simple digit display to a human-readable word form.
:::

  </div>
</details>

<details>
  <summary>
    Natural language input with **`--since`**
  </summary>
  <div>

:::tip
<br />
**Natural language** input is supported by the **`--since`** argument.

<br />

For example,
all of the following are valid:

<br />

- **`--since '12 hours ago'`**
- **`--since '30 days ago'`**
- **`--since 'one year ago'`**

<br />

The [**time-speak**][time-speak-url] library is used to parse the input.
:::

  </div>
</details>

| argument           | alias       | type      | description                                                                       | default   |
| ------------------ | ----------- | --------- | --------------------------------------------------------------------------------- | --------- |
| **`--absolute`**   | **`--abs`** | `boolean` | Print dates as absolute timestamps                                                | **false** |
| **`--humanize`**   | **`-h`**    | `boolean` | Renders durations in human-readable format                                        | **false** |
| **`--since`**      | **`-s`**    | `string`  | Only lists entries since the specified date; **supports natural language input.** |           |
| **`--today`**      | **`-t`**    | `boolean` | Show results for today                                                            | **false** |
| **`--all-sheets`** |             | `boolean` | Show results for all sheets                                                       | **false** |
| **`--all`**        | **`-a`**    | `boolean` | Show all sheet entries                                                            | **false** |
| **`--yesterday`**  | **`-y`**    | `boolean` | Show results from yesterday                                                       | **false** |
| **`--concise`**    | **`-c`**    | `boolean` | Exclude start and end dates from output, showing duration only                    | **false** |
| **`--filter`**     | **`-f`**    | `string`  | Filter results by description                                                     |           |
| **`--sheets`**     |             | `boolean` | Show results for the specified sheets                                             | **false** |

## Examples

Below you can find many examples showcasing the various arguments and how you
can use them to filter output and control rendering.

### Custom Start Date

Running **`tt l --since '4 hours ago'`** yields:
![Output of `tt l --since '4 hours ago'`](/img/terminal_screenshots/tt_l_since.svg)

### Include Specific Sheets

If you want to see the summary for specific sheets, provide a list of sheet
names as the positional argument. For example, **`tt l main`** results in the
following:
![Output of `tt l main`](/img/terminal_screenshots/tt_l_multiple_sheets.svg)

### View Durations As Human-Readable Words

Render durations in a human-readable format with the **`-h`**
(or **`--humanize`**) argument:
![Output of `tt l -h`](/img/terminal_screenshots/tt_l_humanize.svg)

### Display Absolute Dates

Instead of exposing a **`-r`** (or **`--relative`**) argument, the **list**
command displays dates as relative by default. To switch to displaying dates as
absolute timestamps, pass the **`--absolute`** (or **`--abs`**) argument:
![Output of `tt l --abs`](/img/terminal_screenshots/tt_l_absolute.svg)

### Omit Start & End Dates

To reduce the size of the output, you can hide the **start** and **end** dates
with the **`-c`** (or **`--concise`**) argument:
![Output of `tt l -c`](/img/terminal_screenshots/tt_l_concise.svg)

### Filtering

You can search within entry descriptions with the **`-f`** (or **`--filter**`)
argument. The search is case-insensitive. For example, **`tt l -f 'Updating'`**
![Output of `tt l -f 'Updating'`](/img/terminal_screenshots/tt_l_filter.svg)

### Viewing All Data

To display all data, provide the `--all` (disables **start** date filtering)
and `--all-sheets` (includes all sheets in the output). The `-c` and `-h` flags
are included in the call to customize the output:
![Output of `tt l --all --all-sheets -c -h`](/img/terminal_screenshots/tt_l_all_all_sheets.svg)

### View All Entries From Today

Use the **`-t`** (or **`--today`**) argument to select and display only entries
that overlap with the current day. Combine with **`--all-sheets`** to see all
entries:
![Output of `tt l -t --all-sheets`](/img/terminal_screenshots/tt_l_today.svg)

### View All Entries From Yesterday

Use the **`-y`** (or **`--yesterday`**) argument to select and display only
entries that overlap with yesterday. Combine with **`--all-sheets`** to see all
entries:
![Output of `tt l -y --all-sheets`](/img/terminal_screenshots/tt_l_yesterday.svg)

### View Entries Since A Custom Start Date

Use the **`-s`** (or **`--since`**) argument to select and display only entries
since the specified date. This argument supports **natural language** input.
Combine with **`--all-sheets`** to see all entries since that date:
![Output of `tt l --all-sheets -s '3 days ago'`](/img/terminal_screenshots/tt_l_since.svg)

### View Data For All Time

To display all entries for the selected sheets (without filtering by **start**
date), pass the **`--all`** argument:
![Output of `tt l --all`](/img/terminal_screenshots/tt_l_all.svg)

### View Data For All Sheets

To display data for all sheets, but respect the active **start** filter
(including **`--since`**, **`--today`**, etc), pass the **`--all-sheets`**
argument:
![Output of `tt l --all-sheets`](/img/terminal_screenshots/tt_l_all_sheets.svg)

[time-speak-url]: https://github.com/f3rno64/time-speak
