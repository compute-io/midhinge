/**
*
*	COMPUTE: midhinge
*
*
*	DESCRIPTION:
*		- Compute the midhinge for an array of numeric values.
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

(function() {

	'use strict';

	/**
	* FUNCTION: midhinge( arr[, sorted] )
	* Computes the midhinge for an array.
	*
	* @param {Array} arr - array of values
	* @param {Boolean} [sorted] - boolean flag indicating if the input array is pre-sorted
	* @returns {Number} midhinge
	*/
	function midhinge( arr, sorted ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'midhinge()::invalid input argument. Must provide an array.')
		}
		if ( arguments.length > 1 && typeof sorted !== 'boolean' ) {
			throw new TypeError( 'midhinge()::invalid input argument. Second argument must be a boolean.')
		}

		var vec = arr.slice(),
				low,
				high,
				hinge;

		// If needed, sort vector:
		if ( !sorted ) {
			vec.sort( function sort( a, b ) {
				return a - b;
			});
		}

		low = quantile( vec, 0.25 );
		high = quantile( vec, 0.75 );

		// Calculate midhinge:
		hinge = ( low + high )/ 2.0;

		return hinge;

	} // end FUNCTION midhinge()

	/**
	* FUNCTION: quantile( vector, percent )
	* Finds a quantile value.
	*
	* @private
	* @param {Array} vector - 1d array
	* @param {Number} percent - quantile percent [0,1]
	* @returns {Number} quantile value
	*/
	function quantile( vector, percent ) {
		var numValues = vector.length,
			id, 
			value;

		// Calculate the vector index marking the quantile:
		id = ( numValues * percent ) - 1;

		// Is the index an integer?
		if ( id === Math.floor( id ) ) {
			// Value is the average between the value at id and id+1:
			value = ( vector[ id ] + vector[ id+1 ] ) / 2.0;
		} 
		else {
		// Round up to the next index:
		id = Math.ceil( id );
		value = vector[ id ];
		}

		return value;

	} // end FUNCTION quantile()

	// EXPORTS //

	module.exports = midhinge;


})();
