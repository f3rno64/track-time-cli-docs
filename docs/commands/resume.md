---
id: resume
title: Resume
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Resume Command

<details>
  <summary>
    View the output of **`tt resume --help`**
  </summary>
  <div>

    ```
    track-time-cli resume

    Start a new entry with the same description as the previous one

    Options:
      --version  Show version number                                       [boolean]
      --help     Show help                                                 [boolean]
    ```

  </div>
</details>

Use the **resume** command to start a new entry with the same description as the
previous one. This is useful when you are working on a task and want to take a
break; you can check out with **`tt o`** and when you return, **`tt r`** will
start a new entry with same description.

## Examples

See what happens if you resume successfully or receive an error if another
entry is already active on the current time sheet.

### Resume

To resume the previous entry by creating a new one, run **`tt r`**:
![Output of `tt r`](/img/terminal_screenshots/tt_r.svg)

:::note
The **description** and **tags** will be transferred to the new entry.
:::

### Resuming When Another Entry Is Active

If another entry is already active on the current time sheet, you will receive
an error message:
![Output of `tt r` when an entry is active](/img/terminal_screenshots/tt_r_with_active_entry.svg)
