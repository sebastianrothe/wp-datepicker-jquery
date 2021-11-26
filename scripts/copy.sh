#!/bin/sh
VERSION=${1:-develop}
JQUERYUI_VERSION="1.13.0.custom-smoothness"
NAME=datepicker-jqueryui-plugin
OUTPUT_PATH="$NAME/public"
BUNDLE_PATH=${2:-build}

copyAndRename() {
  local folder=$1
  local filetype=$2

  # copy and rename compiled files
  ls -1 $BUNDLE_PATH/dist/index.$filetype | sed "p;s%$BUNDLE_PATH/dist/\index\.$filetype$%$OUTPUT_PATH/$folder/$NAME-$VERSION\.$filetype%g" | xargs -n2 cp

  # copy and rename jquery-custom files
  ls -1 $BUNDLE_PATH/js/jquery-ui-$JQUERYUI_VERSION/jquery-ui.*.$filetype | sed "p;s%$BUNDLE_PATH/js/jquery-ui-$JQUERYUI_VERSION/jquery-ui\..*\.$filetype$%$OUTPUT_PATH/$folder/jquery-ui-custom.min\.$filetype%g" | xargs -n2 cp
}

copyAndRenameWithCompression() {
  local folder=$1
  local filetype=$1

  copyAndRename $folder $filetype
  # these are not generated, so we dont copy them
  #copyAndRename $folder "$filetype.br"
  #copyAndRename $folder "$filetype.gz"
}

main() {
  mkdir -p $OUTPUT_PATH
  copyAndRenameWithCompression css
  copyAndRenameWithCompression js
}

main
