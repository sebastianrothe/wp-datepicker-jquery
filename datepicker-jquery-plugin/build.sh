#!/bin/sh
zip -r -9 dist/wp-jquery-ui-datepicker-MASTER.zip wp-jquery-ui-datepicker \
    -x */.DS_Store \
    -x */.git \
    -x */.svn \
    -x */.idea \
    -X */__MACOSX
