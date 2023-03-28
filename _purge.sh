#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd "${SCRIPT_DIR}"

echo "`pwd`: rm -rf node_modules .next "
rm -rf node_modules .next
