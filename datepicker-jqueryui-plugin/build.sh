#!/bin/sh
VERSION=${1:-develop}
NAME=datepicker-jqueryui-plugin
OUTPUT_PATH=./dist

echo "Creating Plugin bundle for version $VERSION"

mkdir -p $OUTPUT_PATH

zip -r -9 $OUTPUT_PATH/$NAME-$VERSION.zip $NAME \
    -x */.DS_Store \
    -x */.git \
    -x */.svn \
    -x */.idea \
    -X */__MACOSX
