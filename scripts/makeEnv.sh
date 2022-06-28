# !/bin/bash
if [ $# -eq 1 ]; then
    echo "REACT_APP_API=$1" > .env
    # echo REACT_APP_API=localhost > .env
else
    echo "$0 arguments is invalid."
fi

ls -a