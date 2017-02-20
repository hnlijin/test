import * as $protobuf from "protobufjs";

/**
 * Namespace game.
 * @exports game
 * @namespace
 */
export namespace game {

    /**
     * Namespace seaworld.
     * @exports game.seaworld
     * @namespace
     */
    namespace seaworld {

        /**
         * Constructs a new JoinGame.
         * @exports game.seaworld.JoinGame
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class JoinGame {

            /**
             * Constructs a new JoinGame.
             * @exports game.seaworld.JoinGame
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * JoinGame flag.
             * @type {number}
             */
            flag: number;

            /**
             * JoinGame room.
             * @type {number}
             */
            room: number;

            /**
             * JoinGame name.
             * @type {string}
             */
            name: string;

            /**
             * Creates a new JoinGame instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.JoinGame} JoinGame instance
             */
            static create(properties?: Object): game.seaworld.JoinGame;

            /**
             * Encodes the specified JoinGame message.
             * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.JoinGame|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinGame message, length delimited.
             * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.JoinGame|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinGame message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.JoinGame} JoinGame
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.JoinGame;

            /**
             * Decodes a JoinGame message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.JoinGame} JoinGame
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.JoinGame;

            /**
             * Verifies a JoinGame message.
             * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.JoinGame|Object)): string;

            /**
             * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.JoinGame} JoinGame
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.JoinGame;

            /**
             * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.JoinGame.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.JoinGame} JoinGame
             */
            static from(object: { [k: string]: any }): game.seaworld.JoinGame;

            /**
             * Creates a plain object from a JoinGame message. Also converts values to other types if specified.
             * @param {game.seaworld.JoinGame} message JoinGame
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.JoinGame, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this JoinGame message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinGame to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new EntityItem.
         * @exports game.seaworld.EntityItem
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class EntityItem {

            /**
             * Constructs a new EntityItem.
             * @exports game.seaworld.EntityItem
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * EntityItem id.
             * @type {number}
             */
            id: number;

            /**
             * EntityItem name.
             * @type {string}
             */
            name: string;

            /**
             * EntityItem x.
             * @type {number}
             */
            x: number;

            /**
             * EntityItem y.
             * @type {number}
             */
            y: number;

            /**
             * Creates a new EntityItem instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.EntityItem} EntityItem instance
             */
            static create(properties?: Object): game.seaworld.EntityItem;

            /**
             * Encodes the specified EntityItem message.
             * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.EntityItem|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntityItem message, length delimited.
             * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.EntityItem|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntityItem message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.EntityItem} EntityItem
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.EntityItem;

            /**
             * Decodes an EntityItem message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.EntityItem} EntityItem
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.EntityItem;

            /**
             * Verifies an EntityItem message.
             * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.EntityItem|Object)): string;

            /**
             * Creates an EntityItem message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.EntityItem} EntityItem
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.EntityItem;

            /**
             * Creates an EntityItem message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.EntityItem.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.EntityItem} EntityItem
             */
            static from(object: { [k: string]: any }): game.seaworld.EntityItem;

            /**
             * Creates a plain object from an EntityItem message. Also converts values to other types if specified.
             * @param {game.seaworld.EntityItem} message EntityItem
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.EntityItem, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this EntityItem message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this EntityItem to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new RemoveEntityItem.
         * @exports game.seaworld.RemoveEntityItem
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class RemoveEntityItem {

            /**
             * Constructs a new RemoveEntityItem.
             * @exports game.seaworld.RemoveEntityItem
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * RemoveEntityItem id.
             * @type {number}
             */
            id: number;

            /**
             * Creates a new RemoveEntityItem instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem instance
             */
            static create(properties?: Object): game.seaworld.RemoveEntityItem;

            /**
             * Encodes the specified RemoveEntityItem message.
             * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.RemoveEntityItem|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveEntityItem message, length delimited.
             * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.RemoveEntityItem|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveEntityItem message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.RemoveEntityItem;

            /**
             * Decodes a RemoveEntityItem message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.RemoveEntityItem;

            /**
             * Verifies a RemoveEntityItem message.
             * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.RemoveEntityItem|Object)): string;

            /**
             * Creates a RemoveEntityItem message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.RemoveEntityItem;

            /**
             * Creates a RemoveEntityItem message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.RemoveEntityItem.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
             */
            static from(object: { [k: string]: any }): game.seaworld.RemoveEntityItem;

            /**
             * Creates a plain object from a RemoveEntityItem message. Also converts values to other types if specified.
             * @param {game.seaworld.RemoveEntityItem} message RemoveEntityItem
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.RemoveEntityItem, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this RemoveEntityItem message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveEntityItem to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new AddPlayer.
         * @exports game.seaworld.AddPlayer
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class AddPlayer {

            /**
             * Constructs a new AddPlayer.
             * @exports game.seaworld.AddPlayer
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * AddPlayer flag.
             * @type {number}
             */
            flag: number;

            /**
             * AddPlayer players.
             * @type {Array.<game.seaworld.EntityItem>}
             */
            players: game.seaworld.EntityItem[];

            /**
             * Creates a new AddPlayer instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.AddPlayer} AddPlayer instance
             */
            static create(properties?: Object): game.seaworld.AddPlayer;

            /**
             * Encodes the specified AddPlayer message.
             * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.AddPlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddPlayer message, length delimited.
             * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.AddPlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddPlayer message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.AddPlayer} AddPlayer
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.AddPlayer;

            /**
             * Decodes an AddPlayer message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.AddPlayer} AddPlayer
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.AddPlayer;

            /**
             * Verifies an AddPlayer message.
             * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.AddPlayer|Object)): string;

            /**
             * Creates an AddPlayer message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.AddPlayer} AddPlayer
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.AddPlayer;

            /**
             * Creates an AddPlayer message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.AddPlayer.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.AddPlayer} AddPlayer
             */
            static from(object: { [k: string]: any }): game.seaworld.AddPlayer;

            /**
             * Creates a plain object from an AddPlayer message. Also converts values to other types if specified.
             * @param {game.seaworld.AddPlayer} message AddPlayer
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.AddPlayer, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this AddPlayer message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this AddPlayer to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new UpdatePlayer.
         * @exports game.seaworld.UpdatePlayer
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class UpdatePlayer {

            /**
             * Constructs a new UpdatePlayer.
             * @exports game.seaworld.UpdatePlayer
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * UpdatePlayer flag.
             * @type {number}
             */
            flag: number;

            /**
             * UpdatePlayer players.
             * @type {Array.<game.seaworld.EntityItem>}
             */
            players: game.seaworld.EntityItem[];

            /**
             * Creates a new UpdatePlayer instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.UpdatePlayer} UpdatePlayer instance
             */
            static create(properties?: Object): game.seaworld.UpdatePlayer;

            /**
             * Encodes the specified UpdatePlayer message.
             * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.UpdatePlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdatePlayer message, length delimited.
             * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.UpdatePlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdatePlayer message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.UpdatePlayer;

            /**
             * Decodes an UpdatePlayer message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.UpdatePlayer;

            /**
             * Verifies an UpdatePlayer message.
             * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.UpdatePlayer|Object)): string;

            /**
             * Creates an UpdatePlayer message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.UpdatePlayer;

            /**
             * Creates an UpdatePlayer message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.UpdatePlayer.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
             */
            static from(object: { [k: string]: any }): game.seaworld.UpdatePlayer;

            /**
             * Creates a plain object from an UpdatePlayer message. Also converts values to other types if specified.
             * @param {game.seaworld.UpdatePlayer} message UpdatePlayer
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.UpdatePlayer, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UpdatePlayer message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdatePlayer to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new RemovePlayer.
         * @exports game.seaworld.RemovePlayer
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class RemovePlayer {

            /**
             * Constructs a new RemovePlayer.
             * @exports game.seaworld.RemovePlayer
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * RemovePlayer flag.
             * @type {number}
             */
            flag: number;

            /**
             * RemovePlayer players.
             * @type {Array.<game.seaworld.RemoveEntityItem>}
             */
            players: game.seaworld.RemoveEntityItem[];

            /**
             * Creates a new RemovePlayer instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.RemovePlayer} RemovePlayer instance
             */
            static create(properties?: Object): game.seaworld.RemovePlayer;

            /**
             * Encodes the specified RemovePlayer message.
             * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.RemovePlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemovePlayer message, length delimited.
             * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.RemovePlayer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemovePlayer message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.RemovePlayer} RemovePlayer
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.RemovePlayer;

            /**
             * Decodes a RemovePlayer message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.RemovePlayer} RemovePlayer
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.RemovePlayer;

            /**
             * Verifies a RemovePlayer message.
             * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.RemovePlayer|Object)): string;

            /**
             * Creates a RemovePlayer message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemovePlayer} RemovePlayer
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.RemovePlayer;

            /**
             * Creates a RemovePlayer message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.RemovePlayer.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemovePlayer} RemovePlayer
             */
            static from(object: { [k: string]: any }): game.seaworld.RemovePlayer;

            /**
             * Creates a plain object from a RemovePlayer message. Also converts values to other types if specified.
             * @param {game.seaworld.RemovePlayer} message RemovePlayer
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.RemovePlayer, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this RemovePlayer message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this RemovePlayer to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new AddFish.
         * @exports game.seaworld.AddFish
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class AddFish {

            /**
             * Constructs a new AddFish.
             * @exports game.seaworld.AddFish
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * AddFish flag.
             * @type {number}
             */
            flag: number;

            /**
             * AddFish fishs.
             * @type {Array.<game.seaworld.EntityItem>}
             */
            fishs: game.seaworld.EntityItem[];

            /**
             * Creates a new AddFish instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.AddFish} AddFish instance
             */
            static create(properties?: Object): game.seaworld.AddFish;

            /**
             * Encodes the specified AddFish message.
             * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.AddFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddFish message, length delimited.
             * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.AddFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddFish message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.AddFish} AddFish
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.AddFish;

            /**
             * Decodes an AddFish message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.AddFish} AddFish
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.AddFish;

            /**
             * Verifies an AddFish message.
             * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.AddFish|Object)): string;

            /**
             * Creates an AddFish message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.AddFish} AddFish
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.AddFish;

            /**
             * Creates an AddFish message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.AddFish.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.AddFish} AddFish
             */
            static from(object: { [k: string]: any }): game.seaworld.AddFish;

            /**
             * Creates a plain object from an AddFish message. Also converts values to other types if specified.
             * @param {game.seaworld.AddFish} message AddFish
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.AddFish, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this AddFish message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this AddFish to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new UpdateFish.
         * @exports game.seaworld.UpdateFish
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class UpdateFish {

            /**
             * Constructs a new UpdateFish.
             * @exports game.seaworld.UpdateFish
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * UpdateFish flag.
             * @type {number}
             */
            flag: number;

            /**
             * UpdateFish fishs.
             * @type {Array.<game.seaworld.EntityItem>}
             */
            fishs: game.seaworld.EntityItem[];

            /**
             * Creates a new UpdateFish instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.UpdateFish} UpdateFish instance
             */
            static create(properties?: Object): game.seaworld.UpdateFish;

            /**
             * Encodes the specified UpdateFish message.
             * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.UpdateFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateFish message, length delimited.
             * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.UpdateFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateFish message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.UpdateFish} UpdateFish
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.UpdateFish;

            /**
             * Decodes an UpdateFish message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.UpdateFish} UpdateFish
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.UpdateFish;

            /**
             * Verifies an UpdateFish message.
             * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.UpdateFish|Object)): string;

            /**
             * Creates an UpdateFish message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.UpdateFish} UpdateFish
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.UpdateFish;

            /**
             * Creates an UpdateFish message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.UpdateFish.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.UpdateFish} UpdateFish
             */
            static from(object: { [k: string]: any }): game.seaworld.UpdateFish;

            /**
             * Creates a plain object from an UpdateFish message. Also converts values to other types if specified.
             * @param {game.seaworld.UpdateFish} message UpdateFish
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.UpdateFish, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UpdateFish message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateFish to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new RemoveFish.
         * @exports game.seaworld.RemoveFish
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class RemoveFish {

            /**
             * Constructs a new RemoveFish.
             * @exports game.seaworld.RemoveFish
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * RemoveFish flag.
             * @type {number}
             */
            flag: number;

            /**
             * RemoveFish fishs.
             * @type {Array.<game.seaworld.RemoveEntityItem>}
             */
            fishs: game.seaworld.RemoveEntityItem[];

            /**
             * Creates a new RemoveFish instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {game.seaworld.RemoveFish} RemoveFish instance
             */
            static create(properties?: Object): game.seaworld.RemoveFish;

            /**
             * Encodes the specified RemoveFish message.
             * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (game.seaworld.RemoveFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveFish message, length delimited.
             * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (game.seaworld.RemoveFish|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveFish message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.seaworld.RemoveFish} RemoveFish
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.seaworld.RemoveFish;

            /**
             * Decodes a RemoveFish message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.seaworld.RemoveFish} RemoveFish
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.seaworld.RemoveFish;

            /**
             * Verifies a RemoveFish message.
             * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (game.seaworld.RemoveFish|Object)): string;

            /**
             * Creates a RemoveFish message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemoveFish} RemoveFish
             */
            static fromObject(object: { [k: string]: any }): game.seaworld.RemoveFish;

            /**
             * Creates a RemoveFish message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link game.seaworld.RemoveFish.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {game.seaworld.RemoveFish} RemoveFish
             */
            static from(object: { [k: string]: any }): game.seaworld.RemoveFish;

            /**
             * Creates a plain object from a RemoveFish message. Also converts values to other types if specified.
             * @param {game.seaworld.RemoveFish} message RemoveFish
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: game.seaworld.RemoveFish, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this RemoveFish message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveFish to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }
    }
}
