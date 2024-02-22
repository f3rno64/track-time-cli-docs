---
id: out
title: Out
sidebar_position: 3
---

# Out Command

<details>
  <summary>
    View the output of **`tt out --help`**
  </summary>
  <div>
    ```text
    track-time-cli out

    Check out of the active time sheet entry

    Options:
        --version  Show version number                              [boolean]
        --at       Check in at a specific time                      [string]
        --help     Show help                                        [boolean]
    ```
  </div>
</details>

The **`out`** command checks out of the active time sheet by ending the current
entry. If no entry is active, an error message is displayed instead.

:::tip
The **`out`** command has an alias: **`o`**
:::

## Arguments

<details>
  <summary>
    Natural language input with **`--at`**
  </summary>
  <div>

:::tip
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

  </div>
</details>

| argument | alias(es) | type | description | default |
| ---- | --------- | ---- | ----------- | ------- |
| **`--at`** | | `string` | Sets the start time of the created entry; **supports natural-language input.** | |

### Checking Out Retroactively

Using the **`--at`** argument, it is possible to out of a time sheet after
you have ended working. For example, if you have stopped working on your active
entry's task 15 minutes ago and forgot to check out, you can run
**`tt out --at '15 minutes ago'`** to check out at the correct time, keeping
your historical activity accurate.

## Examples

If no entry is active, an error is shown and the
**database** is not modified:
![Output of `tt out` when no entry is active](/img/terminal_screenshots/tt_out_with_no_active_entry.svg)

Otherwise, the entry is ended by setting the **`end`** field to the present
moment, and the **`activeEntryID`** field is cleared in the database. The final
duration is shown in the output:
![Output of `tt out` when no entry is active](/img/terminal_screenshots/tt_out_with_active_entry.svg)

You can also specify the end time via the **`--at`** argument. As noted above,
it supports natural language input. For example, this is the output of
**`tt`** after running **`tt out --at '15 minutes ago'`**:
![Output of `tt out --at '15 minutes ago'`](/img/terminal_screenshots/tt_out_with_past_end.svg)

[time-speak-url]: https://github.com/f3rno64/time-speak
