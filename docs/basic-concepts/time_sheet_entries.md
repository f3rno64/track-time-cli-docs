---
id: time-sheet-entries
title: Time Sheet Entries
sidebar_position: 3
---

:::note
An active entry is one, which has a **start** date but no **end** date. Only
one active entry may exist **per time sheet** at any one time.
:::

Finally, we arrive at the core of **track-time-cli**'s functionality: **Time
Sheet Entries**. These contain several fields, with their
[**schema**][time-sheet-entry-schema-url] reproduced below:

```ts showLineNumbers
export interface ITimeSheetEntry<T> {
  id: number
  start: T
  end: T | null
  description: string
  tags: string[]
}
```

[time-sheet-entry-schema-url]: https://github.com/f3rno64/track-time-cli/blob/main/src/types/generic_data.ts#L1-L7
