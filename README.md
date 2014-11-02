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
var lib = require( 'compute-midhinge' );
```


## Examples

``` javascript
var lib = require( 'compute-midhinge' );
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