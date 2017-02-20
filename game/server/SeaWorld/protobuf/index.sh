#!/bin/sh

pbjs ./protocol/game.seaworld.proto -t static-module -o ./js/game.seaworld.proto.js --import_path ./../../../protobuf/protocol
pbts -o ./ts/game.seaworld.proto.ts ./js/game.seaworld.proto.js