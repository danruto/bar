#!/bin/bash

PWD=$(pwd)/bar/scripts

BATTERY=$(bash "$PWD/battery.sh")
WORKSPACE=$(bash "$PWD/workspace.sh")
SPOTIFY=$(bash "$PWD/nowplaying.sh")
CPU=$(bash "$PWD/load_average.sh")
TIME=$(bash "$PWD/time.sh")


echo $(cat <<-EOF
{
  "battery": "$BATTERY",
  "workspace": "$WORKSPACE",
  "spotify": "$SPOTIFY",
  "cpu": "$CPU",
  "time": "$TIME"
}
EOF
)
