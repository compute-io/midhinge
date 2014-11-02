midhinge
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Compute the midhinge for an array of numeric values.


## Installation

``` bash
$ npm install compute-midhinge
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var midhinge = require( 'compute-midhinge' );
```

#### midhinge( arr[, sorted] )

Computes the midhinge provided an input `array`. If the input `array` is already `sorted`, set the `boolean` flag to `true`.

``` javascript
var unsorted = [ 8, 2, 3, 9, 5, 1, 4, 10, 7, 0, 6 ],
	sorted = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

midhinge( unsorted );
// returns 5

midhinge( sorted, true );
// returns 5
```


## Examples

``` javascript
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
    data[ i ] = Math.round( Math.random()*100 );
}

console.log( midhinge( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


[npm-image]: http://img.shields.io/npm/v/compute-midhinge.svg
[npm-url]: https://npmjs.org/package/compute-midhinge

[travis-image]: http://img.shields.io/travis/compute-io/midhinge/master.svg
[travis-url]: https://travis-ci.org/compute-io/midhinge

[coveralls-image]: https://img.shields.io/coveralls/compute-io/midhinge/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/midhinge?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/midhinge.svg
[dependencies-url]: https://david-dm.org/compute-io/midhinge

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/midhinge.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/midhinge

[github-issues-image]: http://img.shields.io/github/issues/compute-io/midhinge.svg
[github-issues-url]: https://github.com/compute-io/midhinge/issues