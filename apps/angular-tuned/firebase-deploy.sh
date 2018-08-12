#!/usr/bin/env bash
cd ./functions/
rm -r ./browser ./dist-server ./node_modules/ ./lib ./etc
cd ..
npm run build:fire-ssr
cd ./functions/
npm i
tsc -p ./

# Should be done only for the first time
# npm i -g firebase-tools
# firebase login

# Set your project-id
firebase deploy --project="project-id"
