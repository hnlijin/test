/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Lazily resolved type references
    var $lazyTypes = [];
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.game = (function() {
    
        /**
         * Namespace game.
         * @exports game
         * @namespace
         */
        var game = {};
    
        game.seaworld = (function() {
    
            /**
             * Namespace seaworld.
             * @exports game.seaworld
             * @namespace
             */
            var seaworld = {};
    
            seaworld.JoinGame = (function() {
    
                /**
                 * Constructs a new JoinGame.
                 * @exports game.seaworld.JoinGame
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function JoinGame(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * JoinGame flag.
                 * @type {number}
                 */
                JoinGame.prototype.flag = 0;
    
                /**
                 * JoinGame room.
                 * @type {number}
                 */
                JoinGame.prototype.room = 0;
    
                /**
                 * JoinGame name.
                 * @type {string}
                 */
                JoinGame.prototype.name = "";
    
                /**
                 * Creates a new JoinGame instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.JoinGame} JoinGame instance
                 */
                JoinGame.create = function create(properties) {
                    return new JoinGame(properties);
                };
    
                /**
                 * Encodes the specified JoinGame message.
                 * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JoinGame.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.room !== undefined && message.hasOwnProperty("room"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.room);
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified JoinGame message, length delimited.
                 * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JoinGame.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a JoinGame message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.JoinGame} JoinGame
                 */
                JoinGame.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.JoinGame();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            message.room = reader.uint32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a JoinGame message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.JoinGame} JoinGame
                 */
                JoinGame.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a JoinGame message.
                 * @param {game.seaworld.JoinGame|Object} message JoinGame message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                JoinGame.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.room !== undefined)
                        if (!$util.isInteger(message.room))
                            return "room: integer expected";
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.JoinGame} JoinGame
                 */
                JoinGame.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.JoinGame)
                        return object;
                    var message = new $root.game.seaworld.JoinGame();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.room !== undefined && object.room !== null)
                        message.room = object.room >>> 0;
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.JoinGame.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.JoinGame} JoinGame
                 */
                JoinGame.from = JoinGame.fromObject;
    
                /**
                 * Creates a plain object from a JoinGame message. Also converts values to other types if specified.
                 * @param {game.seaworld.JoinGame} message JoinGame
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                JoinGame.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.flag = 0;
                        object.room = 0;
                        object.name = "";
                    }
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.room !== undefined && message.room !== null && message.hasOwnProperty("room"))
                        object.room = message.room;
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Creates a plain object from this JoinGame message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                JoinGame.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this JoinGame to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                JoinGame.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return JoinGame;
            })();
    
            seaworld.EntityItem = (function() {
    
                /**
                 * Constructs a new EntityItem.
                 * @exports game.seaworld.EntityItem
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function EntityItem(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EntityItem id.
                 * @type {number}
                 */
                EntityItem.prototype.id = 0;
    
                /**
                 * EntityItem name.
                 * @type {string}
                 */
                EntityItem.prototype.name = "";
    
                /**
                 * EntityItem x.
                 * @type {number}
                 */
                EntityItem.prototype.x = 0;
    
                /**
                 * EntityItem y.
                 * @type {number}
                 */
                EntityItem.prototype.y = 0;
    
                /**
                 * Creates a new EntityItem instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.EntityItem} EntityItem instance
                 */
                EntityItem.create = function create(properties) {
                    return new EntityItem(properties);
                };
    
                /**
                 * Encodes the specified EntityItem message.
                 * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EntityItem.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.id);
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.x !== undefined && message.hasOwnProperty("x"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.x);
                    if (message.y !== undefined && message.hasOwnProperty("y"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.y);
                    return writer;
                };
    
                /**
                 * Encodes the specified EntityItem message, length delimited.
                 * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EntityItem.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EntityItem message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.EntityItem} EntityItem
                 */
                EntityItem.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.EntityItem();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.id = reader.uint32();
                            break;
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.x = reader.int32();
                            break;
                        case 3:
                            message.y = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EntityItem message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.EntityItem} EntityItem
                 */
                EntityItem.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EntityItem message.
                 * @param {game.seaworld.EntityItem|Object} message EntityItem message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                EntityItem.verify = function verify(message) {    
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.x !== undefined)
                        if (!$util.isInteger(message.x))
                            return "x: integer expected";
                    if (message.y !== undefined)
                        if (!$util.isInteger(message.y))
                            return "y: integer expected";
                    return null;
                };
    
                /**
                 * Creates an EntityItem message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.EntityItem} EntityItem
                 */
                EntityItem.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.EntityItem)
                        return object;
                    var message = new $root.game.seaworld.EntityItem();
                    if (object.id !== undefined && object.id !== null)
                        message.id = object.id >>> 0;
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.x !== undefined && object.x !== null)
                        message.x = object.x | 0;
                    if (object.y !== undefined && object.y !== null)
                        message.y = object.y | 0;
                    return message;
                };
    
                /**
                 * Creates an EntityItem message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.EntityItem.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.EntityItem} EntityItem
                 */
                EntityItem.from = EntityItem.fromObject;
    
                /**
                 * Creates a plain object from an EntityItem message. Also converts values to other types if specified.
                 * @param {game.seaworld.EntityItem} message EntityItem
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EntityItem.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = 0;
                        object.name = "";
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.id !== undefined && message.id !== null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.x !== undefined && message.x !== null && message.hasOwnProperty("x"))
                        object.x = message.x;
                    if (message.y !== undefined && message.y !== null && message.hasOwnProperty("y"))
                        object.y = message.y;
                    return object;
                };
    
                /**
                 * Creates a plain object from this EntityItem message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EntityItem.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this EntityItem to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                EntityItem.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EntityItem;
            })();
    
            seaworld.RemoveEntityItem = (function() {
    
                /**
                 * Constructs a new RemoveEntityItem.
                 * @exports game.seaworld.RemoveEntityItem
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function RemoveEntityItem(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RemoveEntityItem id.
                 * @type {number}
                 */
                RemoveEntityItem.prototype.id = 0;
    
                /**
                 * Creates a new RemoveEntityItem instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem instance
                 */
                RemoveEntityItem.create = function create(properties) {
                    return new RemoveEntityItem(properties);
                };
    
                /**
                 * Encodes the specified RemoveEntityItem message.
                 * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveEntityItem.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.id);
                    return writer;
                };
    
                /**
                 * Encodes the specified RemoveEntityItem message, length delimited.
                 * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveEntityItem.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RemoveEntityItem message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
                 */
                RemoveEntityItem.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.RemoveEntityItem();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.id = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RemoveEntityItem message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
                 */
                RemoveEntityItem.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RemoveEntityItem message.
                 * @param {game.seaworld.RemoveEntityItem|Object} message RemoveEntityItem message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RemoveEntityItem.verify = function verify(message) {    
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                    return null;
                };
    
                /**
                 * Creates a RemoveEntityItem message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
                 */
                RemoveEntityItem.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.RemoveEntityItem)
                        return object;
                    var message = new $root.game.seaworld.RemoveEntityItem();
                    if (object.id !== undefined && object.id !== null)
                        message.id = object.id >>> 0;
                    return message;
                };
    
                /**
                 * Creates a RemoveEntityItem message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.RemoveEntityItem.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemoveEntityItem} RemoveEntityItem
                 */
                RemoveEntityItem.from = RemoveEntityItem.fromObject;
    
                /**
                 * Creates a plain object from a RemoveEntityItem message. Also converts values to other types if specified.
                 * @param {game.seaworld.RemoveEntityItem} message RemoveEntityItem
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveEntityItem.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = 0;
                    if (message.id !== undefined && message.id !== null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };
    
                /**
                 * Creates a plain object from this RemoveEntityItem message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveEntityItem.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this RemoveEntityItem to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveEntityItem.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return RemoveEntityItem;
            })();
    
            seaworld.AddPlayer = (function() {
    
                /**
                 * Constructs a new AddPlayer.
                 * @exports game.seaworld.AddPlayer
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function AddPlayer(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * AddPlayer flag.
                 * @type {number}
                 */
                AddPlayer.prototype.flag = 0;
    
                /**
                 * AddPlayer players.
                 * @type {Array.<game.seaworld.EntityItem>}
                 */
                AddPlayer.prototype.players = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.EntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new AddPlayer instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.AddPlayer} AddPlayer instance
                 */
                AddPlayer.create = function create(properties) {
                    return new AddPlayer(properties);
                };
    
                /**
                 * Encodes the specified AddPlayer message.
                 * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddPlayer.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.players !== undefined && message.hasOwnProperty("players"))
                        for (var i = 0; i < message.players.length; ++i)
                            $types[1].encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified AddPlayer message, length delimited.
                 * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddPlayer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an AddPlayer message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.AddPlayer} AddPlayer
                 */
                AddPlayer.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.AddPlayer();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an AddPlayer message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.AddPlayer} AddPlayer
                 */
                AddPlayer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an AddPlayer message.
                 * @param {game.seaworld.AddPlayer|Object} message AddPlayer message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                AddPlayer.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.players !== undefined) {
                        if (!Array.isArray(message.players))
                            return "players: array expected";
                        for (var i = 0; i < message.players.length; ++i) {
                            var error = $types[1].verify(message.players[i]);
                            if (error)
                                return "players." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an AddPlayer message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.AddPlayer} AddPlayer
                 */
                AddPlayer.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.AddPlayer)
                        return object;
                    var message = new $root.game.seaworld.AddPlayer();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.players) {
                        if (!Array.isArray(object.players))
                            throw TypeError(".game.seaworld.AddPlayer.players: array expected");
                        message.players = [];
                        for (var i = 0; i < object.players.length; ++i) {
                            if (typeof object.players[i] !== "object")
                                throw TypeError(".game.seaworld.AddPlayer.players: object expected");
                            message.players[i] = $types[1].fromObject(object.players[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an AddPlayer message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.AddPlayer.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.AddPlayer} AddPlayer
                 */
                AddPlayer.from = AddPlayer.fromObject;
    
                /**
                 * Creates a plain object from an AddPlayer message. Also converts values to other types if specified.
                 * @param {game.seaworld.AddPlayer} message AddPlayer
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddPlayer.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.players = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.players !== undefined && message.players !== null && message.hasOwnProperty("players")) {
                        object.players = [];
                        for (var j = 0; j < message.players.length; ++j)
                            object.players[j] = $types[1].toObject(message.players[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this AddPlayer message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddPlayer.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this AddPlayer to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                AddPlayer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return AddPlayer;
            })();
    
            seaworld.UpdatePlayer = (function() {
    
                /**
                 * Constructs a new UpdatePlayer.
                 * @exports game.seaworld.UpdatePlayer
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function UpdatePlayer(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UpdatePlayer flag.
                 * @type {number}
                 */
                UpdatePlayer.prototype.flag = 0;
    
                /**
                 * UpdatePlayer players.
                 * @type {Array.<game.seaworld.EntityItem>}
                 */
                UpdatePlayer.prototype.players = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.EntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new UpdatePlayer instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.UpdatePlayer} UpdatePlayer instance
                 */
                UpdatePlayer.create = function create(properties) {
                    return new UpdatePlayer(properties);
                };
    
                /**
                 * Encodes the specified UpdatePlayer message.
                 * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdatePlayer.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.players !== undefined && message.hasOwnProperty("players"))
                        for (var i = 0; i < message.players.length; ++i)
                            $types[1].encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified UpdatePlayer message, length delimited.
                 * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdatePlayer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UpdatePlayer message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
                 */
                UpdatePlayer.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.UpdatePlayer();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UpdatePlayer message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
                 */
                UpdatePlayer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UpdatePlayer message.
                 * @param {game.seaworld.UpdatePlayer|Object} message UpdatePlayer message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                UpdatePlayer.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.players !== undefined) {
                        if (!Array.isArray(message.players))
                            return "players: array expected";
                        for (var i = 0; i < message.players.length; ++i) {
                            var error = $types[1].verify(message.players[i]);
                            if (error)
                                return "players." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an UpdatePlayer message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
                 */
                UpdatePlayer.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.UpdatePlayer)
                        return object;
                    var message = new $root.game.seaworld.UpdatePlayer();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.players) {
                        if (!Array.isArray(object.players))
                            throw TypeError(".game.seaworld.UpdatePlayer.players: array expected");
                        message.players = [];
                        for (var i = 0; i < object.players.length; ++i) {
                            if (typeof object.players[i] !== "object")
                                throw TypeError(".game.seaworld.UpdatePlayer.players: object expected");
                            message.players[i] = $types[1].fromObject(object.players[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an UpdatePlayer message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.UpdatePlayer.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.UpdatePlayer} UpdatePlayer
                 */
                UpdatePlayer.from = UpdatePlayer.fromObject;
    
                /**
                 * Creates a plain object from an UpdatePlayer message. Also converts values to other types if specified.
                 * @param {game.seaworld.UpdatePlayer} message UpdatePlayer
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdatePlayer.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.players = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.players !== undefined && message.players !== null && message.hasOwnProperty("players")) {
                        object.players = [];
                        for (var j = 0; j < message.players.length; ++j)
                            object.players[j] = $types[1].toObject(message.players[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this UpdatePlayer message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdatePlayer.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this UpdatePlayer to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdatePlayer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UpdatePlayer;
            })();
    
            seaworld.RemovePlayer = (function() {
    
                /**
                 * Constructs a new RemovePlayer.
                 * @exports game.seaworld.RemovePlayer
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function RemovePlayer(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RemovePlayer flag.
                 * @type {number}
                 */
                RemovePlayer.prototype.flag = 0;
    
                /**
                 * RemovePlayer players.
                 * @type {Array.<game.seaworld.RemoveEntityItem>}
                 */
                RemovePlayer.prototype.players = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.RemoveEntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new RemovePlayer instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.RemovePlayer} RemovePlayer instance
                 */
                RemovePlayer.create = function create(properties) {
                    return new RemovePlayer(properties);
                };
    
                /**
                 * Encodes the specified RemovePlayer message.
                 * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemovePlayer.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.players !== undefined && message.hasOwnProperty("players"))
                        for (var i = 0; i < message.players.length; ++i)
                            $types[1].encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RemovePlayer message, length delimited.
                 * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemovePlayer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RemovePlayer message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.RemovePlayer} RemovePlayer
                 */
                RemovePlayer.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.RemovePlayer();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RemovePlayer message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.RemovePlayer} RemovePlayer
                 */
                RemovePlayer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RemovePlayer message.
                 * @param {game.seaworld.RemovePlayer|Object} message RemovePlayer message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RemovePlayer.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.players !== undefined) {
                        if (!Array.isArray(message.players))
                            return "players: array expected";
                        for (var i = 0; i < message.players.length; ++i) {
                            var error = $types[1].verify(message.players[i]);
                            if (error)
                                return "players." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a RemovePlayer message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemovePlayer} RemovePlayer
                 */
                RemovePlayer.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.RemovePlayer)
                        return object;
                    var message = new $root.game.seaworld.RemovePlayer();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.players) {
                        if (!Array.isArray(object.players))
                            throw TypeError(".game.seaworld.RemovePlayer.players: array expected");
                        message.players = [];
                        for (var i = 0; i < object.players.length; ++i) {
                            if (typeof object.players[i] !== "object")
                                throw TypeError(".game.seaworld.RemovePlayer.players: object expected");
                            message.players[i] = $types[1].fromObject(object.players[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a RemovePlayer message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.RemovePlayer.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemovePlayer} RemovePlayer
                 */
                RemovePlayer.from = RemovePlayer.fromObject;
    
                /**
                 * Creates a plain object from a RemovePlayer message. Also converts values to other types if specified.
                 * @param {game.seaworld.RemovePlayer} message RemovePlayer
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemovePlayer.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.players = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.players !== undefined && message.players !== null && message.hasOwnProperty("players")) {
                        object.players = [];
                        for (var j = 0; j < message.players.length; ++j)
                            object.players[j] = $types[1].toObject(message.players[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this RemovePlayer message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemovePlayer.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this RemovePlayer to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RemovePlayer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return RemovePlayer;
            })();
    
            seaworld.AddFish = (function() {
    
                /**
                 * Constructs a new AddFish.
                 * @exports game.seaworld.AddFish
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function AddFish(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * AddFish flag.
                 * @type {number}
                 */
                AddFish.prototype.flag = 0;
    
                /**
                 * AddFish fishs.
                 * @type {Array.<game.seaworld.EntityItem>}
                 */
                AddFish.prototype.fishs = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.EntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new AddFish instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.AddFish} AddFish instance
                 */
                AddFish.create = function create(properties) {
                    return new AddFish(properties);
                };
    
                /**
                 * Encodes the specified AddFish message.
                 * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddFish.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.fishs !== undefined && message.hasOwnProperty("fishs"))
                        for (var i = 0; i < message.fishs.length; ++i)
                            $types[1].encode(message.fishs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified AddFish message, length delimited.
                 * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddFish.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an AddFish message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.AddFish} AddFish
                 */
                AddFish.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.AddFish();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.fishs && message.fishs.length))
                                message.fishs = [];
                            message.fishs.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an AddFish message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.AddFish} AddFish
                 */
                AddFish.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an AddFish message.
                 * @param {game.seaworld.AddFish|Object} message AddFish message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                AddFish.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.fishs !== undefined) {
                        if (!Array.isArray(message.fishs))
                            return "fishs: array expected";
                        for (var i = 0; i < message.fishs.length; ++i) {
                            var error = $types[1].verify(message.fishs[i]);
                            if (error)
                                return "fishs." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an AddFish message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.AddFish} AddFish
                 */
                AddFish.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.AddFish)
                        return object;
                    var message = new $root.game.seaworld.AddFish();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.fishs) {
                        if (!Array.isArray(object.fishs))
                            throw TypeError(".game.seaworld.AddFish.fishs: array expected");
                        message.fishs = [];
                        for (var i = 0; i < object.fishs.length; ++i) {
                            if (typeof object.fishs[i] !== "object")
                                throw TypeError(".game.seaworld.AddFish.fishs: object expected");
                            message.fishs[i] = $types[1].fromObject(object.fishs[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an AddFish message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.AddFish.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.AddFish} AddFish
                 */
                AddFish.from = AddFish.fromObject;
    
                /**
                 * Creates a plain object from an AddFish message. Also converts values to other types if specified.
                 * @param {game.seaworld.AddFish} message AddFish
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddFish.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fishs = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.fishs !== undefined && message.fishs !== null && message.hasOwnProperty("fishs")) {
                        object.fishs = [];
                        for (var j = 0; j < message.fishs.length; ++j)
                            object.fishs[j] = $types[1].toObject(message.fishs[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this AddFish message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddFish.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this AddFish to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                AddFish.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return AddFish;
            })();
    
            seaworld.UpdateFish = (function() {
    
                /**
                 * Constructs a new UpdateFish.
                 * @exports game.seaworld.UpdateFish
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function UpdateFish(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UpdateFish flag.
                 * @type {number}
                 */
                UpdateFish.prototype.flag = 0;
    
                /**
                 * UpdateFish fishs.
                 * @type {Array.<game.seaworld.EntityItem>}
                 */
                UpdateFish.prototype.fishs = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.EntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new UpdateFish instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.UpdateFish} UpdateFish instance
                 */
                UpdateFish.create = function create(properties) {
                    return new UpdateFish(properties);
                };
    
                /**
                 * Encodes the specified UpdateFish message.
                 * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateFish.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.fishs !== undefined && message.hasOwnProperty("fishs"))
                        for (var i = 0; i < message.fishs.length; ++i)
                            $types[1].encode(message.fishs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified UpdateFish message, length delimited.
                 * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateFish.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UpdateFish message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.UpdateFish} UpdateFish
                 */
                UpdateFish.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.UpdateFish();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.fishs && message.fishs.length))
                                message.fishs = [];
                            message.fishs.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UpdateFish message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.UpdateFish} UpdateFish
                 */
                UpdateFish.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UpdateFish message.
                 * @param {game.seaworld.UpdateFish|Object} message UpdateFish message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                UpdateFish.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.fishs !== undefined) {
                        if (!Array.isArray(message.fishs))
                            return "fishs: array expected";
                        for (var i = 0; i < message.fishs.length; ++i) {
                            var error = $types[1].verify(message.fishs[i]);
                            if (error)
                                return "fishs." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an UpdateFish message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.UpdateFish} UpdateFish
                 */
                UpdateFish.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.UpdateFish)
                        return object;
                    var message = new $root.game.seaworld.UpdateFish();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.fishs) {
                        if (!Array.isArray(object.fishs))
                            throw TypeError(".game.seaworld.UpdateFish.fishs: array expected");
                        message.fishs = [];
                        for (var i = 0; i < object.fishs.length; ++i) {
                            if (typeof object.fishs[i] !== "object")
                                throw TypeError(".game.seaworld.UpdateFish.fishs: object expected");
                            message.fishs[i] = $types[1].fromObject(object.fishs[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an UpdateFish message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.UpdateFish.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.UpdateFish} UpdateFish
                 */
                UpdateFish.from = UpdateFish.fromObject;
    
                /**
                 * Creates a plain object from an UpdateFish message. Also converts values to other types if specified.
                 * @param {game.seaworld.UpdateFish} message UpdateFish
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateFish.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fishs = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.fishs !== undefined && message.fishs !== null && message.hasOwnProperty("fishs")) {
                        object.fishs = [];
                        for (var j = 0; j < message.fishs.length; ++j)
                            object.fishs[j] = $types[1].toObject(message.fishs[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this UpdateFish message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateFish.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this UpdateFish to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateFish.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UpdateFish;
            })();
    
            seaworld.RemoveFish = (function() {
    
                /**
                 * Constructs a new RemoveFish.
                 * @exports game.seaworld.RemoveFish
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function RemoveFish(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RemoveFish flag.
                 * @type {number}
                 */
                RemoveFish.prototype.flag = 0;
    
                /**
                 * RemoveFish fishs.
                 * @type {Array.<game.seaworld.RemoveEntityItem>}
                 */
                RemoveFish.prototype.fishs = $util.emptyArray;
    
                // Lazily resolved type references
                var $types = {
                    1: "game.seaworld.RemoveEntityItem"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new RemoveFish instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {game.seaworld.RemoveFish} RemoveFish instance
                 */
                RemoveFish.create = function create(properties) {
                    return new RemoveFish(properties);
                };
    
                /**
                 * Encodes the specified RemoveFish message.
                 * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveFish.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.flag);
                    if (message.fishs !== undefined && message.hasOwnProperty("fishs"))
                        for (var i = 0; i < message.fishs.length; ++i)
                            $types[1].encode(message.fishs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RemoveFish message, length delimited.
                 * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveFish.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RemoveFish message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {game.seaworld.RemoveFish} RemoveFish
                 */
                RemoveFish.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.seaworld.RemoveFish();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 0:
                            message.flag = reader.uint32();
                            break;
                        case 1:
                            if (!(message.fishs && message.fishs.length))
                                message.fishs = [];
                            message.fishs.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RemoveFish message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {game.seaworld.RemoveFish} RemoveFish
                 */
                RemoveFish.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RemoveFish message.
                 * @param {game.seaworld.RemoveFish|Object} message RemoveFish message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RemoveFish.verify = function verify(message) {    
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                    if (message.fishs !== undefined) {
                        if (!Array.isArray(message.fishs))
                            return "fishs: array expected";
                        for (var i = 0; i < message.fishs.length; ++i) {
                            var error = $types[1].verify(message.fishs[i]);
                            if (error)
                                return "fishs." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a RemoveFish message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemoveFish} RemoveFish
                 */
                RemoveFish.fromObject = function fromObject(object) {    
                    if (object instanceof $root.game.seaworld.RemoveFish)
                        return object;
                    var message = new $root.game.seaworld.RemoveFish();
                    if (object.flag !== undefined && object.flag !== null)
                        message.flag = object.flag >>> 0;
                    if (object.fishs) {
                        if (!Array.isArray(object.fishs))
                            throw TypeError(".game.seaworld.RemoveFish.fishs: array expected");
                        message.fishs = [];
                        for (var i = 0; i < object.fishs.length; ++i) {
                            if (typeof object.fishs[i] !== "object")
                                throw TypeError(".game.seaworld.RemoveFish.fishs: object expected");
                            message.fishs[i] = $types[1].fromObject(object.fishs[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a RemoveFish message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link game.seaworld.RemoveFish.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {game.seaworld.RemoveFish} RemoveFish
                 */
                RemoveFish.from = RemoveFish.fromObject;
    
                /**
                 * Creates a plain object from a RemoveFish message. Also converts values to other types if specified.
                 * @param {game.seaworld.RemoveFish} message RemoveFish
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveFish.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fishs = [];
                    if (options.defaults)
                        object.flag = 0;
                    if (message.flag !== undefined && message.flag !== null && message.hasOwnProperty("flag"))
                        object.flag = message.flag;
                    if (message.fishs !== undefined && message.fishs !== null && message.hasOwnProperty("fishs")) {
                        object.fishs = [];
                        for (var j = 0; j < message.fishs.length; ++j)
                            object.fishs[j] = $types[1].toObject(message.fishs[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this RemoveFish message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveFish.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this RemoveFish to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveFish.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return RemoveFish;
            })();
    
            return seaworld;
        })();
    
        return game;
    })();
    
    // Resolve lazy type references to actual types
    $util.lazyResolve($root, $lazyTypes);

    return $root;
});
