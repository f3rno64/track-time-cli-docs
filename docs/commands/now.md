---
id: now
title: Now
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Now Command

:::note
Only the **currently active sheet** is considered. To view the active entry on
another sheet, first switch to it with **`tt s <name>`**.
:::

The **`now`** command lists all **active time sheet entries** their
**parent sheet name**, the current **total duration**, and the entry
**description** itself along with any **tags**.

## Usage

:::tip
The **`now`** command is the default if **`track-time-cli`** is invoked with no
command. So **`tt`** is equivalent to **`tt now`**.
:::

Use this command when you want to check the current active time sheet entry.
It will either display it and related data, or inform you that no time entry
is active.

## Examples

Running **`tt now`** with an active entry yields:
![Output of `tt now`](/img/terminal_screenshots/tt_now.svg)

If **no entry is _active_**, an error is shown instead:
![Output of `tt now`](/img/terminal_screenshots/tt_now_no_active_entry.svg)

## Arguments

| argument | alias(es) | type | description | default |
| ---- | --------- | ---- | ----------- | ------- |
| **`--humanize`** | **`-h`** | `boolean` | Renders durations in human-readable format | **false** |

<br />
<br />

---

<br />

<details>
  <summary>
    View the output of **`tt now --help`**
  </summary>
  <div>
    ```text
    track-time-cli now

    Display all active time sheet entries

    Options:
          --version   Show version number                               [boolean]
      -h, --humanize  Print the total duration in human-readable format [boolean]
          --help      Show help                                         [boolean]
    ```
  </div>
</details>

