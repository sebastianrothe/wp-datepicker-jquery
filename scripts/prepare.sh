#!/bin/sh
VERSION=${1:-develop}
NAME=datepicker-jqueryui-plugin
OUTPUT_PATH="$NAME/$NAME/public"
BUNDLE_PATH=bundle

copyAndRename() {
  local filetype=$1
  ls $BUNDLE_PATH/src.*.$filetype | sed "p;s%$BUNDLE_PATH/src\..*\.$filetype$%$OUTPUT_PATH/$filetype/$NAME-$VERSION\.$filetype%g" | xargs -n2 cp
}

main() {
  mkdir -p $OUTPUT_PATH
  copyAndRename css
  copyAndRename js
}

main
