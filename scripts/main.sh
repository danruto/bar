#!/bin/bash

PWD=$(pwd)/bar/scripts

BATTERY=$(bash "$PWD/battery.sh")
WORKSPACE=$(bash "$PWD/workspace.sh")
SPOTIFY=$(bash "$PWD/nowplaying.sh")


echo $(cat <<-EOF
{
  "battery": "$BATTERY",
  "workspace": "$WORKSPACE",
  "spotify": "$SPOTIFY"
}
EOF
)
