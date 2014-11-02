
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	midhinge = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-midhinge', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( midhinge ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
					'5',
					5,
					true,
					undefined,
					null,
					NaN,
					function(){},
					{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				midhinge( value, true );
			};
		}
	});

	it( 'should throw an error if provided a non-boolean for the second argument', function test() {
		var values = [
					'5',
					5,
					[],
					undefined,
					null,
					NaN,
					function(){},
					{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				midhinge( [], value );
			};
		}
	});

	it( 'should compute the midhinge', function test() {
		var data, expected;

		// quartile indices are integers
		// Q1: 3.5, Q3: 6.5, midhinge: 5
		data = [ 6, 4, 3, 3, 5, 7, 4, 7 ];
		expected = 5;

		// unsorted test
		assert.strictEqual( midhinge( data ), expected );

		// Sort the data:
		data.sort( function sort( a, b ) {
			return a - b;
		});

		// sorted test
		assert.strictEqual( midhinge( data, true ), expected );

		// quartile indices are not integers
		// Q1: 2, Q3: 7, midhinge: 4.5
		data = [ 3, -5, 2, 9, 6, 1, -2, 7, 7, 3, 6, 4, 8 ];
		expected = 4.5;
		assert.strictEqual( midhinge( data ), expected );
	});

});