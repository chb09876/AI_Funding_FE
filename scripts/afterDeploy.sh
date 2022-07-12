#!/bin/bash
find /root/deploy_tmp -maxdepth 1 -type d -name "build*" -printf '%f' | xargs -i{} rm -rf "/root/{}"
mv /root/deploy_tmp/build* /root/
rm -rf /root/deploy_tmp