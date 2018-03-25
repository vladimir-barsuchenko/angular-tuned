#!/usr/bin/env bash
cd ./functions/
rm -r ./browser ./dist-server ./node_modules/ ./lib ./etc
cd ..
npm run build:fire-ssr
cd ./functions/
tsc -p ./
npm i
firebase deploy
