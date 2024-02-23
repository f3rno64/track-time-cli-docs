***

id: introduction
title: Introduction
sidebar\_position: 1
toc\_min\_heading\_level: 2
toc\_max\_heading\_level: 5
---------------------------

# Introduction

<details>
  <summary>
    Remember, you van always view the full command reference with
    **`tt --help`**:
  </summary>

  <div>

    ```

bash: line 1: yatsu: command not found
node:internal/modules/cjs/loader:1152
  throw err;
  ^

Error: Cannot find module 'format-duration'
Require stack:
- /home/f3rno64/.src/github/f3rno64/track-time-cli/dist/utils/get_duration_lang_string.js
- /home/f3rno64/.src/github/f3rno64/track-time-cli/dist/utils/index.js
- /home/f3rno64/.src/github/f3rno64/track-time-cli/dist/db/index.js
- /home/f3rno64/.src/github/f3rno64/track-time-cli/dist/cli.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1149:15)
    at Module._load (node:internal/modules/cjs/loader:990:27)
    at Module.require (node:internal/modules/cjs/loader:1237:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (/home/f3rno64/.src/github/f3rno64/track-time-cli/dist/utils/get_duration_lang_string.js:4:51)
    at Module._compile (node:internal/modules/cjs/loader:1378:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
    at Module.load (node:internal/modules/cjs/loader:1212:32)
    at Module._load (node:internal/modules/cjs/loader:1028:12)
    at Module.require (node:internal/modules/cjs/loader:1237:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/f3rno64/.src/github/f3rno64/track-time-cli/dist/utils/get_duration_lang_string.js',
    '/home/f3rno64/.src/github/f3rno64/track-time-cli/dist/utils/index.js',
    '/home/f3rno64/.src/github/f3rno64/track-time-cli/dist/db/index.js',
    '/home/f3rno64/.src/github/f3rno64/track-time-cli/dist/cli.js'
  ]
}

Node.js v21.6.1
    ```

  </div>
</details>

![Banner](/img/terminal_screenshots/tt_l_banner.svg)

**Track Time CLI** is a command-line utility built with \[**Node.JS**]\[node-url]
and \[**TypeScript**]\[ts-url] that is performant, versatile, and offers many
features for both recording your activities and exploring historical activity
to gain insights on what conditions are you most productive in.

It is still in an early stage of development, but is already perfectly usable
and can provide you with potentially interesting statistics.time

Over time, as you begin to use it more often, you will gradually build up a
database with interesting contents. Many commands can be used to retrieve
historical activity and list it in various formats.

:::tip
Some commands accept arguments that enable the rendering of dates and durations
in familiar, human-readable formats, such as relative to the present moment
(i.e. `'2 days ago'`) or `'22 minutes and 50 seconds'` as a duration.
:::

Those commands that alter **entry** **start** or **end** times support natural
language input via the \[**`time-speak`**]\[time-speak-url] library.

For example, the following is a valid sequence of commands that will create
sequential time sheet entries for work done over a brief period of time:

```sh
tt s main // switch to the sheet named 'main'
tt in fix renering of time stamps @fix
// ...some time later
tt out --at '13 minutes ago' // the end time is explicitly set to compensate
for forgetting to end the entry when the work was finished. This allows you to
keep your log historically accurate.

tt in "paint walls @maintenance"

// ... some time later

tt o --at '10 minutes ago'

x``
tt r // starts a new entry with the same **`description`** & **`tags`** as the
     // last, but with the **start** date being set to the current moment.

// ... 45 minutes later
tt o

// When run in order, the commands illustrated above will create 3 new entries
// in the active time sheet. For the curious, a defuly-collapsed section is
// provided here showing what such a list looks like:

```

This is very useful and solves the common problem of tracking entries that you
did not check into, but did start working on, and only realized your mistake
after a significant period of time. Such commands allow you to keep your entry
durations realistic, in turn affecting the weekly, monthly, and breakdown
reports that can be generated.


## Inspiration -- *Ruby's Timetrap*

It is the spiritual successor to *Ruby's* \[**timetrap**]\[timetrap-url] CLI
utility, which is no longer maintained but is still being used by many people
all over the world.

\[**Timetrap**]\[timetrap-url] set the standard for features that a CLI time
tracker must provide, and taught a workflow that scaled well over time
while keeping interactions with the tool to a minimum. It provided very
little in the way of the ability to analyze past performance and identify areas
for improvement.

Its export capabilities were also highly limited, and it was
coded in Ruby, a language which I love but know that an equivalent
implementation in modern Node.JS would perform better.

After some research, I realised **timetrap** was the best tool avaialble at the
time, and no other CLI tools aimed at the same problem even came close in terms
of user experience and stability.

## Why Track Time CLI?

* **It's *really* fast**! Almost all logic is broken up into small functions
  with each serving a single purpose. The **database** is stored as JSON at
  `~/.track-time-cli/db.json`, and is only modified by commands that must alter
  the DB contents in order to preserve their changes.

The package is named **track-time-cli**, and can be immediately installed via
the usual `npm install -g track-time-cli`, or the equivalent with a different
package manager. It will be immediately ready to use, and create an initially
empty database with a single time sheet named **main**.

It is designed to be used with
multiple active projects, which may either be professional and maybe even paid,
or personal and recreational activities.
