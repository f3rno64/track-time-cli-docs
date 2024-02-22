---
id: today
title: Today
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Today Command

<details>
  <summary>
    View the output of **`tt today --help`**
  </summary>
  <div>

    ```
    track-time-cli today [sheets..]

    Display a summary of activity for today

    Options:
          --version          Show version number                    [boolean]
          --absolute, --abs  Print dates as absolute timestamps     [boolean]
      -h, --humanize         Print the total duration in human-readable format
                                                                    [boolean]
          --all-sheets       Show results for all sheets            [boolean]
          --help             Show help                              [boolean]
          --sheets           Show results for the specified sheets  [array]
    ```

  </div>
</details>

The **`today`** command is used to display a summary of activity for the
current day. Multiple sheets can be included in the output; by default only the 
active sheet will be used.

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
    Render durations into a human-readable word form with **`--humanize`**.
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
    Render dates as absolute ISO timestamps with **`--absolute`**
  </summary>
  <div>

:::tip
<br />
The **`--absolute`** (or **`--abs`**) argument enables rendering of dates as
ISO timestamps instead of relative times.
:::

  </div>
</details>

| argument           | alias       | type      | description                                                                       | default   |
| ------------------ | ----------- | --------- | --------------------------------------------------------------------------------- | --------- |
| **`--absolute`**   | **`--abs`** | `boolean` | Print dates as absolute timestamps                                                | **false** |
| **`--humanize`**   | **`-h`**    | `boolean` | Print the durations in a human-readable format                                    | **false** |
| **`--all-sheets`** |             | `boolean` | Include all sheets in the results                                                 | **false** |
| **`--sheets`**     |             | `string`  | Specify the sheets that will be included in the results                           | **false** |

## Examples

A few simple examples are provided below.

### View A Summary of Activity From All Sheets For Today

Often, you will want to see a summary of the day's activity across all sheets.
To do this, provide the **`--all-sheets`** argument. Otherwise, you can select
sheets with the **`--sheets`** argument. For exanple:
![Output of `tt t --all-sheets`](/img/terminal_screenshots/tt_t_all_sheets.svg)

### Select Individual Sheets

Pass sheet names via the **`--sheets`** argument to include them in the
results:
![Output of `tt t --sheet main`](/img/terminal_screenshots/tt_t_sheet.svg)

### View Durations As Human-Readable Words

Render durations in a human-readable format with the **`-h`**
(or **`--humanize`**) argument:
![Output of `tt t -h`](/img/terminal_screenshots/tt_t_humanize.svg)

### Display Absolute Dates

Instead of exposing a **`-r`** (or **`--relative`**) argument, the **today**
command displays dates as relative by default. To switch to displaying dates as
absolute timestamps, pass the **`--absolute`** (or **`--abs`**) argument:
![Output of `tt t --absolute`](/img/terminal_screenshots/tt_t_absolute.svg)
