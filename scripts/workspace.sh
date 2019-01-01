#!/bin/bash

if ! [ -x "$(command -v chunkc)" ]; then
  echo "chunkc not found"
  exit 1
fi

ACTIVE=$(chunkc tiling::query -d id)
TOTAL=$(chunkc tiling::query -D 1 | tail -c 1)
MODE=$(chunkc tiling::query -d mode)

echo $(cat <<-EOF
{
  "active": "$ACTIVE",
  "total": "$TOTAL",
  "mode": "$MODE"
}
EOF
)
