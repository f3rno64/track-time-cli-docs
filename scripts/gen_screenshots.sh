#!/usr/bin/env bash

CWD="$(dirname $(realpath $0))"
OUT_PATH="$CWD/../static/img/terminal_screenshots"

tt l --all | yartsu -t "tt l --all" --theme cat-frappe --width 150 -o "$OUT_PATH/tt_l_all.svg"
tt l -c | yartsu -t "tt l -c" --theme cat-frappe --width 115 -o "$OUT_PATH/tt_l_concise.svg"
tt l -h | yartsu -t "tt l -h" --theme cat-frappe --width 155 -o "$OUT_PATH/tt_l_humanize.svg"
tt l --abs | yartsu -t "tt l --abs" --theme cat-frappe --width 165 -o "$OUT_PATH/tt_l_absolute.svg"
tt l -f 'Updating' | yartsu -t "tt l -f 'Updating'" --theme cat-frappe --width 130 -o "$OUT_PATH/tt_l_filter.svg"
tt l main | yartsu -t "tt l main" --theme cat-frappe --width 150 -o "$OUT_PATH/tt_l_multiple_sheets.svg"
tt l -t --all-sheets | yartsu -t "tt l -t --all-sheets" --theme cat-frappe --width 115 -o "$OUT_PATH/tt_l_today.svg"
tt l --all-sheets | yartsu -t "tt l --all-sheets" --theme cat-frappe --width 150 -o "$OUT_PATH/tt_l_all_sheets.svg"
tt l -y --all-sheets | yartsu -t "tt l -y --all-sheets" --theme cat-frappe --width 115 -o "$OUT_PATH/tt_l_yesterday.svg"
tt l --all-sheets -s '3 days ago' | yartsu -t "tt l --all-sheets -s '3 days ago'" --theme cat-frappe --width 140 -o "$OUT_PATH/tt_l_since.svg"
tt l --all --all-sheets -c -h | yartsu -t "tt l --all --all-sheets -c -h" --theme cat-frappe --width 120 -o "$OUT_PATH/tt_l_all_all_sheets.svg"
