#!/usr/bin/env bash

npm run build:production

echo "serving http://$(ipconfig getifaddr en0):9000"
node /srv/fe/nlp.domains/index.js

