---
id: week
title: Week
sidebar_position: 4
---

# Week Command

<details>
  <summary>
    View the output of **`track-time-cli week --help`**
  </summary>
  <div>
    ```text
    track-time-cli week [sheets..]

    Display a summary of activity for the past week

    Options:
          --version          Show version number                           [boolean]
      -t, --total            Display total duration for the week for all sheets
                                                                           [boolean]
      -r, --ago, --relative  Print dates as relative time (e.g. 5 minutes ago)
                                                                           [boolean]
      -h, --humanize         Print the total duration in human-readable format
                                                                           [boolean]
          --help             Show help                                     [boolean]
          --sheets           Show results for the specified sheets         [array]
    ```
  </div>
</details>

![Banner](/img/terminal_screenshots/tt_w_banner.svg)

The **`week`** command generates a summary of your activity over the past week,
broken down by sheet and day of the week. Totals for each day are shown.

If the **`--total`** option is used, the summary will merge all sheet entries
and report the total duration and entry count per day of the week.

Use this command to review your work week and identify the days of the week in
which you are most productive. When using **`--total`**, you can identify
particularly busy days.

:::tip
The **`week`** command has an alias: **`w`**
:::

## Arguments

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

| Option | Alias(es) | Type | Description |
| ------ | --------- | ---- | ----------- |
| **`--total`** | **`-t`** | `boolean` | Display total duration for the week for all sheets. |
| **`--relative`** | **`ago`**, **`-r`** | `boolean` | Print dates as relative time (e.g. "5 minutes ago"). |
| **`--humanize`** | **`-h`** | `boolean` | Print durations in human-readable format. |
| **`--sheets`** | | `array` | Show results for the specified sheets. Also a **positional** argument. |

## Examples

Examples are provided below to illustrate the arguments and how they affect the
final output.

### View A Summary Including All Sheets

To display a summary of your activity for the past week across all sheets, run
**`tt w`**:
![Output of `tt w`](/img/terminal_screenshots/tt_w.svg)

### Include Specific Sheets

If you want to see the summary for specific sheets, provide a list of sheet
names as the positional argument.

### View A Combined Total Per Weekday

To see a cumulative total of activity per week day for all selected entries,
pass the **`-t`** (or **`--total`**) argument. The output will resemble this:
![Output of `tt w main`](/img/terminal_screenshots/tt_w_total.svg)

### View Durations As Human-Readable Words

Render durations in a human-readable format with the **`-h`**
(or **`--humanize`**) argument:
![Output of `tt w main`](/img/terminal_screenshots/tt_w_humanize.svg)

### Display Relative Dates

Similarly, use **`-r`** (or **`--relative`**) to render dates as relative to
the present moment:
![Output of `tt w main`](/img/terminal_screenshots/tt_w_relative.svg)
