#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd "${SCRIPT_DIR}"

export BUILD_ARG_ROUTER_BASE_URL=/
export BUILD_ARG_ASSET_PREFIX=/
export BUILD_ARG_BASE_URL=https://wontact.jjfive.net

export NODE_ENV=development

./_build-docker.sh ohlab

/app/services/wontact/wontact-web/up.sh
