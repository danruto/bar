#!/bin/bash

if command -v chunkc >/dev/null 2>&1;
  then echo $(chunkc tiling::query -d id);
  else echo "";
fi
