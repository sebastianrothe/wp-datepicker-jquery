#!/bin/sh
VERSION=${1:-develop}
NAME=datepicker-jqueryui-plugin
OUTPUT_PATH="$NAME/public"
BUNDLE_PATH=${2:-bundle}

copyAndRename() {
  local folder=$1
  local filetype=$2

  # copy and rename src files
  ls -1 $BUNDLE_PATH/src.*.$filetype | sed "p;s%$BUNDLE_PATH/src\..*\.$filetype$%$OUTPUT_PATH/$folder/$NAME-$VERSION\.$filetype%g" | xargs -n2 cp

  # copy and rename jquery-custom files
  ls -1 $BUNDLE_PATH/jquery-ui.*.$filetype | sed "p;s%$BUNDLE_PATH/jquery-ui\..*\.$filetype$%$OUTPUT_PATH/$folder/jquery-ui-custom.min\.$filetype%g" | xargs -n2 cp
}

copyAndRenameWithCompression() {
  local folder=$1
  local filetype=$1

  copyAndRename $folder $filetype
  copyAndRename $folder "$filetype.br"
  copyAndRename $folder "$filetype.gz"
}

main() {
  mkdir -p $OUTPUT_PATH
  copyAndRenameWithCompression css
  copyAndRenameWithCompression js
}

main
