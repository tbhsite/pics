#!/bin/bash

for FILE in poster_*.jpg ; do
  convert -define jpeg:extent=50KB $FILE -thumbnail '640x480>' -strip -auto-orient ${FILE##*_}
done
