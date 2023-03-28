# syntax=docker/dockerfile:experimental

FROM node:16-alpine AS DEPS_IMAGE

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./

COPY scripts ./scripts

# RUN yarn install --frozen-lockfile
RUN --mount=type=cache,id=yarn,sharing=locked,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile

FROM node:16-alpine AS BUILDER_IMAGE
ARG ROUTER_BASE_URL=/
ARG ASSET_PREFIX=/
ARG BASE_URL=https://wontact.jjfive.net

WORKDIR /app

COPY package.json yarn.lock ./

COPY package.json                   ./package.json
COPY tsconfig.json                  ./tsconfig.json
COPY next.config.js                 ./next.config.js
COPY pages                          ./pages
COPY public                         ./public
COPY src                            ./src

RUN echo "BASE_URL=${BASE_URL}"               >> ./.env.local && \
    echo "ROUTER_BASE_URL=${ROUTER_BASE_URL}" >> ./.env.local && \
    echo "ASSET_PREFIX=${ASSET_PREFIX}"       >> ./.env.local

COPY --from=DEPS_IMAGE /app/node_modules ./node_modules
# RUN yarn add --cwd main -D postcss-import && yarn build 
RUN yarn build --no-lint 
# RUN yarn install --production --ignore-scripts --prefer-offline

RUN rm next.config.js \
    && yarn autoclean --init \
    && yarn autoclean --force \
    && rm -rf node_modules/babel* \
    && rm -rf node_modules/typescript \
    && rm -rf node_modules/eslint* \
    && rm -rf node_modules/@eslint* \
    && rm -rf node_modules/@types \
    && rm -rf node_modules/rollup* \
    && rm -rf node_modules/@rollup \
    && rm -rf node_modules/rimraf* \
    && rm -rf node_modules/mkdirp* \
    && rm -rf node_modules/prettier* \
    && rm -rf node_modules/@typescript-eslint* \
    && rm -rf node_modules/vue-eslint-parser \
    && rm -rf node_modules/caniuse-lite \
    && rm -rf node_modules/*webpack-plugin* \
    && rm -rf node_modules/http-proxy* \
    && rm -rf node_modules/glob \
    && rm -rf node_modules/karma* \
    && rm -rf node_modules/mocha* \
    && rm -rf node_modules/livereload* \
    && rm -rf node_modules/prebuild-install* \
    && rm -rf node_modules/svgo \
    && rm -rf node_modules/phantomjs* \
    && rm -rf node_modules/topomerge* \
    && rm -rf node_modules/webpack*  \
    && rm -rf node_modules/@babel/cli*  \
    && rm -rf node_modules/@babel/helper*  \
    && rm -rf node_modules/@babel/plugin*  \
    && rm -rf node_modules/@babel/types*  \
    && rm -rf node_modules/@babel/preset*  \
    && rm -rf node_modules/html-minifier-terser  \
    && rm -rf node_modules/jsdoc  \
    && rm -rf node_modules/topojson* \
    && rm -rf node_modules/ts-node* \
    && rm -rf node_modules/sha.js \
    && rm -rf node_modules/ansi-html \
    && rm -rf node_modules/escodegen \
    && rm -rf node_modules/esprima   \
    && rm -rf node_modules/markdown-it \
    && rm -rf node_modules/jsesc \
    && rm -rf node_modules/source-list-map \
    && rm -rf node_modules/source-map \
    && rm -rf node_modules/source-map-js \
    && rm -rf node_modules/source-map-resolve \
    && rm -rf node_modules/source-map-support \
    && rm -rf node_modules/source-map-url \
    && rm -rf node_modules/sourcemap-codec 

RUN find node_modules -name "*.d.ts" -delete \
    && find node_modules -name "*.map" -delete \
    && find node_modules -name "LICENSE*" -delete \
    && find node_modules -name "*.ts" -type f -delete \
    && find node_modules -name "*.tsx" -type f -delete \
    && find node_modules -name "*.swf" -type f -delete \
    && find node_modules -name "*.flow" -type f -delete \
    && find node_modules -name ".github" -type f -delete \
    && find node_modules -name "*.scss" -type f -delete \
    && find node_modules -name "yarn.lock" -type f -delete

RUN rm -rf node_modules/sshpk \
    && rm -rf node_modules/@tensorflow/tfjs-backend-cpu/src \
    && rm -rf node_modules/@tensorflow/tfjs/src \
    && rm -rf node_modules/@tensorflow/tfjs/tools \
    && rm -rf node_modules/@tensorflow/tfjs-backend-webgl/src \
    && rm -rf node_modules/@tensorflow/tfjs-converter/src \
    && rm -rf node_modules/@tensorflow/tfjs-converter/metadata \
    && rm -rf node_modules/@tensorflow/tfjs-converter/tools  \
    && rm -rf node_modules/@tensorflow/tfjs-converter/*.gif \
    && rm -rf node_modules/@tensorflow/tfjs-core/develop* \
    && rm -rf node_modules/@tensorflow/tfjs-core/scripts \
    && rm -rf node_modules/@tensorflow/tfjs-core/src \
    && rm -rf node_modules/@tensorflow/tfjs-data/src \
    && rm -rf node_modules/@tensorflow/tfjs-layer/src \
    && rm -rf node_modules/plotly.js/build \
    && rm -rf node_modules/plotly.js/draft* \
    && rm -rf node_modules/plotly.js/lib \
    && rm -rf node_modules/plotly.js/src \
    && rm -rf node_modules/plotly.js/tasks \
    && rm -rf node_modules/mathjs/src \
    && rm -rf node_modules/mapbox-gl/src \
    && rm -rf node_modules/mapbox-gl/build \
    && rm -rf node_modules/mapbox-gl/flow-typed \
    && rm -rf node_modules/danfojs/src 


FROM node:16-alpine as runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 2000 -S nodejs
RUN adduser -S nextjs -u 2000

COPY --from=BUILDER_IMAGE /app/public ./public
COPY --from=BUILDER_IMAGE --chown=nextjs:nodejs   /app/.next ./.next
COPY --from=BUILDER_IMAGE /app/node_modules      ./node_modules
COPY --from=BUILDER_IMAGE /app/package.json      ./package.json
COPY --from=BUILDER_IMAGE /app/.env.local        ./.env.local
COPY run-in-docker.sh                            ./run-in-docker.sh

RUN chmod 751 /app/run-in-docker.sh

USER nextjs

EXPOSE 3000

CMD "/app/run-in-docker.sh"
