# !/bin/bash
if [ $# -eq 2 ]; then
    DATE=$(date "+%F %H:%M")
    echo -e "REACT_APP_API=$1\nREACT_APP_VERSION=$2\nREACT_APP_UPDATE_DATE=\"$DATE\"" > .env
else
    echo "$0 arguments is invalid."
fi
