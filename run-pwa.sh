#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build
ng build --prod

# Copy prebuilt worker into our site
cp node_modules/@angular/service-worker/bundles/erker-basic.min.js dist/

# Serve
cd dist
http-server
