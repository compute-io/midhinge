/**
*
*	COMPUTE: midhinge
*
*
*	DESCRIPTION:
*		- Computes the midhinge of a numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
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
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'midhinge()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'midhinge()::invalid input argument. Options should be an object.' );
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
