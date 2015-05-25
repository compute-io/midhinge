'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	quantile = require( 'compute-quantile' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// MIDHINGE //

/**
* FUNCTION: midhinge( arr[, opts] )
*	Computes the midhinge of a numeric array.
*
* @param {Array} arr - numeric array
* @param {Object} [opts] - quantile options
* @returns {Number} midhinge
*/
function midhinge( arr, opts ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'midhinge()::invalid input argument. Must provide an array.  Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'midhinge()::invalid input argument. Options should be an object.  Value: `' + opts + '`.' );
		}
	} else {
		opts = {
			'sorted': false
		};
	}
	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
		opts.sorted = true;
	}
	return ( quantile( arr, 0.25, opts ) + quantile( arr, 0.75, opts ) ) / 2.0;
} // end FUNCTION midhinge()


// EXPORTS //

module.exports = midhinge;
