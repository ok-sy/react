#!/usr/bin/env sh

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd ${SCRIPT_DIR}
 
cd ./node_modules/@types
find . -type d -name react | grep node_modules | xargs rm -rf

