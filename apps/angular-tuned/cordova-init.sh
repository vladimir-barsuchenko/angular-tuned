#!/usr/bin/env bash
# npm install -g cordova
cordova create mobile-app com.levgaas.mobileapp "mobile-app"
cd ./mobile-app
cordova platform add browser
# cordova platform add android
# cordova platform add ios
