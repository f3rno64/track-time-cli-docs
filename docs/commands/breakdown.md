---
id: breakdown
title: Breakdown
sidebar_position: 12
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Breakdown Command

<details>
  <summary>
    View the output of **`tt breakdown --help`**
  </summary>
  <div>

    ```
    track-time-cli breakdown [sheets..]

    Display total durations per day for one or more sheets

    Options:
          --version          Show version number                            [boolean]
          --all-sheets       Show results for all sheets                    [boolean]
      -r, --ago, --relative  Print dates as relative time (e.g. 5 minutes ago)
                                                                            [boolean]
      -h, --humanize         Print the total duration in human-readable format
                                                                            [boolean]
      -s, --since            Only list entries since the specified date     [string]
          --help             Show help                                      [boolean]
    ```

  </div>
</details>

![Banner](/img/terminal_screenshots/tt_b_banner.svg)

The **`breakdown`** command, or **`b`** for short, displays total time logged
by the day, day of the week, and hour.

Provide one or more sheet names to include them in the results. The usual
**`-h`** and **`-r`** are available.

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
    Render **start** and **end** dates as relative to the present moment with
    **`--relative`**
  </summary>
  <div>

:::tip
<br />
The **`-r`** (or **`--relative`**) argument enables the rendering of dates as
relative to the present moment. For example, the output for an entry's
**start** date may be `2 weeks ago` when using this flag.
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

| argument                                                                          | alias               | type      | description                                                                       | default   |
| ------------------                                                                | -----------         | --------- | -----------------                                                                 | --------- |
| **`--humanize`**                                                                  | **`-h`**            | `boolean` | Renders durations in human-readable format                                        | **false** |
| **`--since`**                                                                     | **`-s`**            | `string`  | Only lists entries since the specified date; **supports natural language input.** |           |
| **`--all-sheets`**                                                                |                     | `boolean` | Show results for all sheets                                                       | **false** |
| **`--relative`**                                                                  | **`ago`**, **`-r`** | `boolean` | Print dates as relative time (e.g. "5 minutes ago").                              |
| **`--sheets`**                                                                    |                     | `array`   | Show results for the specified sheets. Also a **positional** argument.            |

## Examples

Below you can find many examples showcasing the various arguments and how you
can use them to filter output and control rendering.

### TODO

Examples pending

[time-speak-url]: https://github.com/f3rno64/time-speak
