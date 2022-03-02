#!/bin/sh

npm run build
rm -rf ../phonebook-back/build
cp -r build ../phonebook-back