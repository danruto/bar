#!/bin/bash

PERCENT=$(pmset -g batt | egrep -o '([0-9]+\%).*' | cut -f1 -d';')
STATE=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19)

echo $(cat <<-EOF
{
  "percentage": "$PERCENT",
  "state": "$STATE"
}
EOF
)
