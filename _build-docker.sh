#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd ${SCRIPT_DIR}

export DOCKER_BUILDKIT=1

HUB=hub.jjfive.net
IMAGE_NAME=wontact-web

prog=$0
tag=$1
DOCKER_FILE=$2

if [ -z "${DOCKER_FILE}" ];then
	DOCKER_FILE="Dockerfile"
fi

if [ -z "$tag" ]
then
    echo
    echo "Usage:"
    echo " $prog_nm <docker-image-tag>"
    echo "Example:"
    echo " $prog_nm sample"
    echo " created docker image is '${IMAGE_NAME}:sample'"
    echo
    exit 1
fi

ROUTER_BASE_URL="${BUILD_ARG_ROUTER_BASE_URL}"
ASSET_PREFIX="${BUILD_ARG_ASSET_PREFIX}"
BASE_URL="${BUILD_ARG_BASE_URL}"

IMG=${IMAGE_NAME}:${tag}

echo
echo "docker build . -f ${DOCKER_FILE}"
docker build . -f ${DOCKER_FILE} \
      -t $IMG  \
      --build-arg BASE_URL=${BASE_URL} \
      --build-arg ROUTER_BASE_URL=${ROUTER_BASE_URL} \
      --build-arg ASSET_PREFIX=${ASSET_PREFIX}


echo
echo "docker tag $IMG $HUB/pub/$IMG"
docker tag $IMG $HUB/pub/$IMG

echo 'Mouse1234!' | docker login --password-stdin -u jjfive $HUB

echo
echo "docker push $HUB/pub/$IMG"
docker push $HUB/pub/$IMG


