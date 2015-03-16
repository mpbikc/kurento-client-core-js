/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link core/complexTypes.RTCStats}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.RTCStats} value
 */
function checkRTCStats(key, value)
{
  checkType('String', key+'.id', value.id, true);
  checkType('RTCStatsType', key+'.type', value.type, true);
  checkType('float', key+'.timestamp', value.timestamp, true);
};


/**
 * An RTCStats dictionary represents the stats gathered.
 *
 * @memberof module:core/complexTypes
 *
 * @typedef core/complexTypes.RTCStats
 *
 * @type {Object}
 * @property {external:String} id
 *  A unique id that is associated with the object that was inspected to produce this RTCStats object.
 * @property {module:core/complexTypes.RTCStatsType} type
 *  The type of this object.
 * @property {external:Number} timestamp
 *  The timestamp associated with this object. The time is relative to the UNIX epoch (Jan 1, 1970, UTC).
 */


module.exports = checkRTCStats;