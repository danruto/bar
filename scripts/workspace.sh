#!/usr/bin/env bash

chunkc=/usr/local/bin/chunkc

ACTIVE=$($chunkc tiling::query -d id)
TOTAL=$($chunkc tiling::query -D 1 | tail -c 1)
MODE=$($chunkc tiling::query -d mode)
CURRENT_WINDOW=$($chunkc tiling::query --window name)

CURRENT_MONITOR=$($chunkc tiling::query --monitor id)
DESKTOPS_FOR_MONITOR=$($chunkc tiling::query --desktops-for-monitor $CURRENT_MONITOR)

echo $(cat <<-EOF
{
  "active": "$ACTIVE",
  "total": "$TOTAL",
  "mode": "$MODE",
  "currentWindow": "$CURRENT_WINDOW",
  "currentMonitor": "$CURRENT_MONITOR"
}
EOF
)
