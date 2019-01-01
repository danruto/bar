#!/bin/bash

PWD=$(pwd)/bar/scripts

BATT_PERCENT=$(bash "$PWD/battery.sh")
BATT_STATE=$(bash "$PWD/charging.sh")
WORKSPACE=$(bash "$PWD/workspace.sh")
SPOTIFY=$(bash "$PWD/nowplaying.sh")
INPUT=$(bash "$PWD/input_source.sh")
CPU=$(bash "$PWD/load_average.sh")
MAIL=$(bash "$PWD/mail.sh")
TIME=$(bash "$PWD/time.sh")


echo $(cat <<-EOF
{
  "battery": {
    "percentage": "$BATT_PERCENT",
    "state": "$BATT_STATE"
  },
  "workspace": $WORKSPACE,
  "spotify": "$SPOTIFY",
  "input": "$INPUT",
  "mail": "$MAIL",
  "cpu": "$CPU",
  "time": "$TIME"
}
EOF
)
