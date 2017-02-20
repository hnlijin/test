#!/bin/sh

pbjs ./protocol/game.proto -t static-module -o ./js/game.proto.js
pbts -o ./ts/game.proto.ts ./js/game.proto.js