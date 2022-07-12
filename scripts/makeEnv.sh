# !/bin/bash
if [ $# -eq 1 ]; then
    echo "REACT_APP_API=$1" > .env
else
    echo "$0 arguments is invalid."
fi
