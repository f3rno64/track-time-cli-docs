---
id: list
title: List
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# List Command

The **`list`** command lists time sheet entries. It supports many arguments
that can be used to filter results or modify the rendering of dates and
durations.

It takes one position argument, **`<...sheets>`**, which filters the
time sheets shown in the output. If not provided, only the currently **active**
sheet will be considered.

## Usage

The **`list`** command queries the database for time sheet entries with the
specified filters, and displays the selected entries in a table **per-sheet**.

Sheets are specified as a position argument, i.e. **`tt list coding sports
reading`**. If none are specified, all sheets are used.

:::tip natural language input with **`--since`**
<br />
**Natural language** input is supported by the **`--since`** argument.

<br />

For example,
all of the following are valid:

<br />

- **`--since '3 days ago'`**
- **`--since 'five months ago'`**
- **`--since '1 hour and 32 minutes ago'`**
- **`--since 'fourty eight hours ago'`**

<br />

The [**time-speak**][time-speak-url] library is used to parse the input.
:::

The arguments **`--today`**, **`--yesterday`**, **`--since`**, and **`--all`**
filter the results by date, while **`--filter`** filters by description.

To hide the start and end dates, use the **`--concise`** flag.

## Examples 

Running **`tt l --since '3 days ago' -c -h reading coding`**
yields:
![Output of `tt l --since '3 days ago' -c -h reading coding`](/img/terminal_screenshots/tt_now.svg)

## Arguments

| argument | alias(es) | type | description | default |
| ---- | --------- | ---- | ----------- | ------- |
| **`--absolute`** | **`--abs`** | `boolean` | Print dates as absolute timestamps | **false** |
| **`--humanize`** | **`-h`** | `boolean` | Renders durations in human-readable format | **false** |
| **`--since`** | **`-s`** | `string` | Only lists entries since the specified date; **supports natural language input.** | |
| **`--today`** | **`-t`** | `boolean` | Show results for today | **false** |
| **`--all-sheets`** | | `boolean` | Show results for all sheets | **false** |
| **`--all`** | **`-a`** | `boolean` | Show all sheet entries | **false** |
| **`--yesterday`** | **`-y`** | `boolean` | Show results from yesterday | **false** |
| **`--concise`** | **`-c`** | `boolean` | Exclude start and end dates from output, showing duration only | **false** |
| **`--filter`** | **`-f`** | `string` | Filter results by description | |
| **`--sheets`** | | `boolean` | Show results for the specified sheets | **false** |

<br />
<br />

***

<br />

<details>
  <summary>
    View the output of **`tt list --help`**
  </summary>
  <div>
    ```text
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
          [array] [choices: "track-time-cli", "cst", "misc", "time-speak", "gaming",
                  "blog", "node-ts-lib-template", "track-time-cli-ui", "to-numbers",
                    "study-crew", "mk-ui", "job-hunt", "global-gigs", "xf-bash-lib",
      "vim-snippets", "dotfiles", "datsusara-blog", "http-server-md", "nvim-config",
                "general-coding", "apartment-hunt", "elflog", "track-time-cli-docs"]
    ```

  </div>
</details>

[time-speak-url]: https://github.com/f3rno64/time-speak