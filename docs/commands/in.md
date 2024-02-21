---
id: in
title: In
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# In Command

The **`in`** command starts a new entry in the active time sheet. It is the
core of **`track-time-cli`** (along with the **`out`** command), providing the
mechanism to create time sheet entries.

## Usage

Use the **`in`** command to check into a time sheet by creating a new entry
beginning at the present moment.

:::tip natural language input with **`--at`**
<br />
**Natural language** input is supported by the **`--at`** argument.

<br />

For example,
all of the following are valid:

<br />

- **`--at '3 days ago'`**
- **`--at 'five months ago'`**
- **`--at '1 hour and 32 minutes ago'`**
- **`--at 'fourty eight hours ago'`**

<br />

The [**time-speak**][time-speak-url] library is used to parse the input.
:::

## Examples

If **no entry is _active_**, an error is shown instead:
![Output of `tt now`](/img/terminal_screenshots/tt_now_no_active_entry.svg)

## Arguments

| argument | alias(es) | type | description | default |
| ---- | --------- | ---- | ----------- | ------- |
| **`--at`** | | `string` | Sets the start time of the created entry; **supports natural-language input.** | |
| **`--description`** | | `string` | Sets the time entry description; this can also be provided via the position argument | |

<br />
<br />

---

<br />

<details>
  <summary>
    View the output of **`tt in --help`**
  </summary>
  <div>
    ```text
    track-time-cli in [description..]

    Check in to a time sheet

    Options:
      --version      Show version number                            [boolean]
      --at           Check in at a specific time                    [string]
      --description  New description for the specified entry        [string]
      --help         Show help                                      [boolean]
    ```
  </div>
</details>
