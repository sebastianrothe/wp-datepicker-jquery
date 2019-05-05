#!/bin/sh
VERSION=${1:-develop}
NAME=datepicker-jqueryui-plugin
OUTPUT_PATH="$NAME/public"
BUNDLE_PATH=${2:-bundle}

copyAndRename() {
  local filetype=$1
  ls -1 $BUNDLE_PATH/src.*.$filetype | sed "p;s%$BUNDLE_PATH/src\..*\.$filetype$%$OUTPUT_PATH/$filetype/$NAME-$VERSION\.$filetype%g" | xargs -n2 cp

  ls -1 $BUNDLE_PATH/jquery-ui.*.$filetype | sed "p;s%$BUNDLE_PATH/jquery-ui\..*\.$filetype$%$OUTPUT_PATH/$filetype/jquery-ui-custom.min\.$filetype%g" | xargs -n2 cp
}

main() {
  mkdir -p $OUTPUT_PATH
  copyAndRename css
  copyAndRename js
}

main
