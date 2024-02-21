---
id: in
title: In
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# In Command

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

The **`in`** command starts a new entry in the **currently active** time sheet
if no other entry is currently active. It is the core of **`track-time-cli`**
(along with the **`out`** command), providing the mechanism by which time sheet
entries are created.

:::tip
The **`in`** command has an alias: **`i`**
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
| **`--description`** | | `string` | Sets the time entry description; this can also be provided via the position argument | |

### Checking In Retroactively

Using the **`--at`** argument, it is possible to check into a time sheet after
you have started working but with a start time in the past. For example, if you
have a meeting and want to track it but forget to `tt in` when it starts, you
can run **`tt in --at '15 minutes ago' in a meeting on some topic`** if it's
been ongoing for 15 minutes.

### Tags

Currently **tag** support is still early, but you can already tag your time
sheet entries by specifying tags as strings prefixed with **`'@'`**. They are
meant to be used to organize your entries for later querying and reporting.

For example, once completed, you will be able to filter by tag while using the
**list** command.

Currently, this only works if you quote your description. For example, this
starts a new entry with the **@feature** and **@frontend** tags:

```sh
tt in --at '30 minutes ago' "create modal component @feature @frontend"
```

## Examples

If an entry is **active**, an error is shown and no entry is created:
![Output of `tt in` with an entry already active](/img/terminal_screenshots/tt_in_with_active_entry.svg)

Otherwise, a new entry is created with the **start** date set to the present
time, and it is set as the active entry by **name** in the time sheet:
![Output of `tt in` with no active entry](/img/terminal_screenshots/tt_in_with_no_active_entry.svg)

You can also specify the start time via the **`--at`** argument. As noted
above, it supports natural language input. For example, this is the output of
**`tt`** after running **`tt in --at '15 minutes ago' some task description`**:
![Output of `tt` after checking in with a past start date](/img/terminal_screenshots/tt_now_after_in.svg)

[time-speak-url]: https://github.com/f3rno64/time-speak
