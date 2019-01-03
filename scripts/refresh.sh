#!/bin/bash

if [ "$1" = "" ]; then
  echo "[Error] Please specify component to refresh."
  exit 1
fi

touch $HOME/Library/Application\ Support/Übersicht/widgets/bar/components/$1.jsx
